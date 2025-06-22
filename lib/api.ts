const API_URL = process.env.WORDPRESS_API_URL!;

async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 10000, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            categories {
              nodes {
                name
              }
            }
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      pdf {
        pdf {
          node {
          sourceUrl
          mediaItemUrl
        }
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
      }
      posts(first: 10000) {
        edges {
          node {
            ...PostFields
            content
          }
        }
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  const originalPostCategory = data.post.categories.edges.map(
    ({ node }) => node.name
  );

  // don't display same post in more posts //

  data.posts.edges = data.posts.edges.filter(
    ({ node }) => node.slug !== slug
  );

  // display category of posts, check against category of original post and choose posts from the same category //

  data.posts.edges = data.posts.edges.filter(({ node }) => {
    const postCategories = node.categories.edges.map(
      ({ node }) => node.name
    );
    return postCategories.some((category) =>
      originalPostCategory.includes(category)
    );
  });

  const filteredPosts = data.posts.edges.filter(({ node }) =>
    node.categories.edges.some(({ node }) =>
      originalPostCategory.includes(node.name)
    )
  );

  //  limit posts to three //

  data.posts.edges = filteredPosts.slice(0, 3);

  return data;
}

export async function getFrontPageContent(
  FrontPageSlug = "front-page"
) {
  const data = await fetchAPI(`
  query getFrontPageContent {
    pages(where: {name: "front-page"}) {
      nodes {
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  const featuredImage = data?.pages?.nodes[0]?.featuredImage || "";
  return { content, featuredImage };
}

export async function getAboutPageContent(aboutPageSlug = "about") {
  const data = await fetchAPI(`
  query getAboutPageContent {
    pages(where: {name: "about"}) {
      nodes {
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  const featuredImage = data?.pages?.nodes[0]?.featuredImage || "";
  return { content, featuredImage };
}

export async function getSupportersPageContent(
  supportersPageSlug = "supporters"
) {
  const data = await fetchAPI(`
  query getAboutPageContent {
    pages(where: {name: "supporters"}) {
      nodes {
        content

      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  return { content };
}

export async function getEventsPageContent(eventsPageSlug = "events") {
  const data = await fetchAPI(`
  query getAboutPageContent {
    pages(where: {name: "events"}) {
      nodes {
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  const featuredImage = data?.pages?.nodes[0]?.featuredImage || "";
  return { content, featuredImage };
}

export async function getResourcesPageContent(
  ResourcesPageSlug = "resources"
) {
  const data = await fetchAPI(`
  query getAboutPageContent {
    pages(where: {name: "resources"}) {
      nodes {
        content
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
      `);
  const content = data?.pages?.nodes[0]?.content || "";
  const featuredImage = data?.pages?.nodes[0]?.featuredImage || "";
  return { content, featuredImage };
}
