(()=>{var e={};e.id=86,e.ids=[86],e.modules={4350:e=>{e.exports={content:"WordpressText_content__Bmxbe",prose:"WordpressText_prose__xawnJ","prose-xl":"WordpressText_prose-xl__rHQ_x"}},1041:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>f,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>x,routeModule:()=>b,unstable_getServerProps:()=>h,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>P});var a=s(7093),n=s(5244),o=s(1323),i=s(7645),d=s(6814),u=s(9030),l=e([u]);u=(l.then?(await l)():l)[0];let c=(0,o.l)(u,"default"),p=(0,o.l)(u,"getStaticProps"),g=(0,o.l)(u,"getStaticPaths"),m=(0,o.l)(u,"getServerSideProps"),f=(0,o.l)(u,"config"),x=(0,o.l)(u,"reportWebVitals"),P=(0,o.l)(u,"unstable_getStaticProps"),y=(0,o.l)(u,"unstable_getStaticPaths"),S=(0,o.l)(u,"unstable_getStaticParams"),h=(0,o.l)(u,"unstable_getServerProps"),v=(0,o.l)(u,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/aims",pathname:"/aims",bundlePath:"",filename:""},components:{App:d.default,Document:i.default},userland:u});r()}catch(e){r(e)}})},8484:(e,t,s)=>{"use strict";s.d(t,{DT:()=>o,Y8:()=>c,_S:()=>l,ds:()=>i,h9:()=>n,iX:()=>d,vx:()=>u});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw console.error(a.errors),Error("Failed to fetch API");return a.data}async function n(){let e=await a(`
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
  `,{variables:{id:e,idType:"SLUG"}}),s=t.post.categories.edges.map(({node:e})=>e.name);t.posts.edges=t.posts.edges.filter(({node:t})=>t.slug!==e),t.posts.edges=t.posts.edges.filter(({node:e})=>e.categories.edges.map(({node:e})=>e.name).some(e=>s.includes(e)));let r=t.posts.edges.filter(({node:e})=>e.categories.edges.some(({node:e})=>s.includes(e.name)));return t.posts.edges=r.slice(0,3),t}async function d(e="front-page"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function u(e="about"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function l(e="events"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function c(){let e=await a(`
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
  `);return e?.posts}},9030:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>l,getStaticProps:()=>c});var a=s(997),n=s(6836),o=s(8484),i=s(4350),d=s.n(i),u=e([n]);function l({content:e,featuredImage:t}){return a.jsx("div",{children:a.jsx(n.Z,{children:a.jsx("div",{children:a.jsx("div",{className:` ${d().content}`,dangerouslySetInnerHTML:{__html:e}})})})})}n=(u.then?(await u)():u)[0];let c=async()=>{let e=await (0,o.vx)();return{props:{content:e.content,featuredImage:e.featuredImage},revalidate:10}};r()}catch(e){r(e)}})},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9752:e=>{"use strict";e.exports=import("@vercel/analytics/react")},7451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},6197:e=>{"use strict";e.exports=import("framer-motion")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,263,673],()=>s(1041));module.exports=r})();