(()=>{var e={};e.id=405,e.ids=[405],e.modules={4350:e=>{e.exports={content:"WordpressText_content__Bmxbe",prose:"WordpressText_prose__xawnJ","prose-xl":"WordpressText_prose-xl__rHQ_x"}},1496:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>g,reportWebVitals:()=>x,routeModule:()=>b,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>h});var a=s(7093),o=s(5244),n=s(1323),d=s(7645),i=s(6814),l=s(6209),c=e([l]);l=(c.then?(await c)():c)[0];let u=(0,n.l)(l,"default"),g=(0,n.l)(l,"getStaticProps"),p=(0,n.l)(l,"getStaticPaths"),m=(0,n.l)(l,"getServerSideProps"),f=(0,n.l)(l,"config"),x=(0,n.l)(l,"reportWebVitals"),h=(0,n.l)(l,"unstable_getStaticProps"),P=(0,n.l)(l,"unstable_getStaticPaths"),y=(0,n.l)(l,"unstable_getStaticParams"),S=(0,n.l)(l,"unstable_getServerProps"),v=(0,n.l)(l,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:i.default,Document:d.default},userland:l});r()}catch(e){r(e)}})},8484:(e,t,s)=>{"use strict";s.d(t,{DT:()=>n,Y8:()=>u,_S:()=>c,ds:()=>d,h9:()=>o,iX:()=>i,vx:()=>l});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw console.error(a.errors),Error("Failed to fetch API");return a.data}async function o(){let e=await a(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);return e?.posts}async function n(e){let t=await a(`
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
  `,{variables:{onlyEnabled:!e,preview:e}});return t?.posts}async function d(e){let t=await a(`
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
  `,{variables:{id:e,idType:"SLUG"}}),s=t.post.categories.edges.map(({node:e})=>e.name);t.posts.edges=t.posts.edges.filter(({node:t})=>t.slug!==e),t.posts.edges=t.posts.edges.filter(({node:e})=>e.categories.edges.map(({node:e})=>e.name).some(e=>s.includes(e)));let r=t.posts.edges.filter(({node:e})=>e.categories.edges.some(({node:e})=>s.includes(e.name)));return t.posts.edges=r.slice(0,3),t}async function i(e="front-page"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function l(e="about"){let t=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function u(){let e=await a(`
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
  `);return e?.posts}},6209:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>m,getStaticProps:()=>f});var a=s(997),o=s(6836),n=s(8484),d=s(4350),i=s.n(d),l=s(5675),c=s.n(l),u=s(968),g=s.n(u),p=e([o]);function m({content:e,featuredImage:t}){return(0,a.jsxs)(o.Z,{children:[a.jsx(g(),{children:a.jsx("link",{rel:"preload",href:t.node.sourceUrl,as:"image"})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[a.jsx("div",{className:`${i().content}`,children:a.jsx("div",{dangerouslySetInnerHTML:{__html:e}})}),a.jsx("div",{children:a.jsx(c(),{width:"1080",height:"980",src:t.node.sourceUrl,alt:t.node.altText,className:"rounded-lg object-cover"})})]})]})}o=(p.then?(await p)():p)[0];let f=async()=>{let e=await (0,n.iX)();return{props:{content:e.content,featuredImage:e.featuredImage},revalidate:10}};r()}catch(e){r(e)}})},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9752:e=>{"use strict";e.exports=import("@vercel/analytics/react")},7451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},6197:e=>{"use strict";e.exports=import("framer-motion")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,263,673],()=>s(1496));module.exports=r})();