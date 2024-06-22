"use strict";(()=>{var e={};e.id=765,e.ids=[765],e.modules={2896:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>f,default:()=>g,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>x});var a=s(7093),n=s(5244),o=s(1323),i=s(7645),l=s(6814),d=s(5025),c=e([d]);d=(c.then?(await c)():c)[0];let g=(0,o.l)(d,"default"),u=(0,o.l)(d,"getStaticProps"),p=(0,o.l)(d,"getStaticPaths"),m=(0,o.l)(d,"getServerSideProps"),f=(0,o.l)(d,"config"),h=(0,o.l)(d,"reportWebVitals"),x=(0,o.l)(d,"unstable_getStaticProps"),v=(0,o.l)(d,"unstable_getStaticPaths"),y=(0,o.l)(d,"unstable_getStaticParams"),P=(0,o.l)(d,"unstable_getServerProps"),S=(0,o.l)(d,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/issues",pathname:"/issues",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:d});r()}catch(e){r(e)}})},7393:(e,t,s)=>{s.d(t,{Z:()=>d});var r=s(997),a=s(5675),n=s.n(a),o=s(1664),i=s.n(o);function l({title:e,coverImage:t,slug:s}){let a=r.jsx(n(),{fill:!0,alt:t?.node.altText,src:t?.node.sourceUrl,className:"object-cover object-center min-w-100 max-w-100 hover:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out"});return r.jsx("div",{className:"relative min-w-[30vw] min-h-[30vh] lg:min-w-[18vw] lg:min-h-[24vh] overflow-hidden",children:s?r.jsx(i(),{href:`/posts/${s}`,"aria-label":e,children:a}):a})}function d({title:e,coverImage:t,excerpt:s,slug:a,category:n}){let o=s?s.split(/[.!?()]/)[0].trim():"";return r.jsx("div",{className:"mb-6 lg:mb-0 bg-darkerBg bg-opacity-30 hover:bg-opacity-50 p-8 rounded-lg",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-2 lg:space-y-3",children:[t&&r.jsx(l,{title:e,coverImage:t,slug:a}),r.jsx("h1",{className:"text-2xl text-link hover:text-hover capitalize",children:r.jsx(i(),{href:`/posts/${a}`,dangerouslySetInnerHTML:{__html:e}})}),r.jsx("div",{className:"font-serif text-lg",dangerouslySetInnerHTML:{__html:o}})]})})}},8484:(e,t,s)=>{s.d(t,{CP:()=>g,DT:()=>o,Y8:()=>u,_S:()=>c,ds:()=>i,h9:()=>n,iX:()=>l,vx:()=>d});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw console.error(a.errors),Error("Failed to fetch API");return a.data}async function n(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function o(e){let t=await a(`
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
              }
            }
          }
        }
      }
    }
  `,{variables:{onlyEnabled:!e,preview:e}});return t?.posts}async function i(e){let t=await a(`
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
  `,{variables:{id:e,idType:"SLUG"}}),s=t.post.categories.edges.map(({node:e})=>e.name);t.posts.edges=t.posts.edges.filter(({node:t})=>t.slug!==e),t.posts.edges=t.posts.edges.filter(({node:e})=>e.categories.edges.map(({node:e})=>e.name).some(e=>s.includes(e)));let r=t.posts.edges.filter(({node:e})=>e.categories.edges.some(({node:e})=>s.includes(e.name)));return t.posts.edges=r.slice(0,3),t}async function l(e="front-page"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function d(e="about"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function c(e="events"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function g(){let e=await a(`
query allcategories {
  categories(first: 10000) {
    edges {
      node {
        name
      }
    }
  }
}
`);return e?.categories?.edges||[]}async function u(){let e=await a(`
    query AllPosts {
      posts(first: 10000, where: { orderby: { field: DATE, order: DESC }, categoryName: "Issues" }) {
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
              }
            }
          }
        }
      }
    }
  `);return e?.posts}},5025:(e,t,s)=>{s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>d,getStaticProps:()=>c});var a=s(997),n=s(6836),o=s(8484),i=s(7393),l=e([n]);function d({allPosts:{edges:e}}){return a.jsx("div",{children:a.jsx(n.Z,{children:a.jsx("div",{className:"lg:grid lg:grid-cols-4 lg:gap-x-5 lg:gap-y-5",children:e.map(({node:e})=>a.jsx(i.Z,{title:e.title,coverImage:e.featuredImage,slug:e.slug,excerpt:e.excerpt,category:e.categories.nodes.map(e=>e.name)},e.slug))})})})}n=(l.then?(await l)():l)[0];let c=async({})=>({props:{allPosts:await (0,o.Y8)()},revalidate:10});r()}catch(e){r(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},9752:e=>{e.exports=import("@vercel/analytics/react")},7451:e=>{e.exports=import("@vercel/speed-insights/next")},6197:e=>{e.exports=import("framer-motion")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,263,673],()=>s(2896));module.exports=r})();