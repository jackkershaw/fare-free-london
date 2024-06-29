(()=>{var e={};e.id=783,e.ids=[783],e.modules={4350:e=>{e.exports={content:"WordpressText_content__Bmxbe",prose:"WordpressText_prose__xawnJ","prose-xl":"WordpressText_prose-xl__rHQ_x"}},1206:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{config:()=>f,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>w,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>x});var a=s(7093),n=s(5244),o=s(1323),i=s(7645),d=s(6814),l=s(160),u=e([l]);l=(u.then?(await u)():u)[0];let c=(0,o.l)(l,"default"),p=(0,o.l)(l,"getStaticProps"),g=(0,o.l)(l,"getStaticPaths"),m=(0,o.l)(l,"getServerSideProps"),f=(0,o.l)(l,"config"),h=(0,o.l)(l,"reportWebVitals"),x=(0,o.l)(l,"unstable_getStaticProps"),y=(0,o.l)(l,"unstable_getStaticPaths"),b=(0,o.l)(l,"unstable_getStaticParams"),v=(0,o.l)(l,"unstable_getServerProps"),P=(0,o.l)(l,"unstable_getServerSideProps"),w=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/getinvolved",pathname:"/getinvolved",bundlePath:"",filename:""},components:{App:d.default,Document:i.default},userland:l});r()}catch(e){r(e)}})},9785:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{Z:()=>u});var a=s(997),n=s(6689),o=s(9648),i=s(271),d=s.n(i),l=e([o]);function u(){let[e,t]=(0,n.useState)({fname:"",lname:"",email:"",phone:"",message:""}),s=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),r=e=>/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/.test(e),i=s=>{let{name:r,value:a}=s.target;t({...e,[r]:a})},l=async a=>{a.preventDefault();let n=!1,i={};if(s(e.email)||(i.email="Please enter a valid email address.",n=!0),r(e.phone)||(i.phone="Please enter a valid phone number.",n=!0),n){d().fire({icon:"error",title:"Oops...",text:Object.values(i).join(" ")});return}try{let s=await o.default.post("https://api.airtable.com/v0/appIEhVJVYhaRDs6J/tbl08GRrX1G1yPz8t",{records:[{fields:{fname:e.fname,lname:e.lname,email:e.email,phone:e.phone,message:e.message}}]},{headers:{Authorization:"Bearer patzgBVpu8V9T0qvc.28844ab5f3a24494f3af0bf727e207164ab7dd2699d424363674680a989176d5","Content-Type":"application/json"}});200===s.status&&(d().fire({icon:"success",title:"Success",text:"Thanks for signing up. See you soon!"}),t({fname:"",lname:"",email:"",phone:"",message:""}))}catch(e){console.error("Error submitting form:",e),d().fire({icon:"error",title:"Submission Failed",text:"An error occurred while submitting the form. Please try again."})}};return(0,a.jsxs)("form",{onSubmit:l,className:"space-y-6 rounded-lg bg-white p-8 text-black shadow-lg font-body",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[a.jsx("input",{type:"text",name:"fname",value:e.fname,onChange:i,placeholder:"First Name",className:"rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg",required:!0}),a.jsx("input",{type:"text",name:"lname",value:e.lname,onChange:i,placeholder:"Last Name",className:"rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg",required:!0})]}),a.jsx("input",{type:"email",name:"email",value:e.email,onChange:i,placeholder:"Email",className:"w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg",required:!0}),a.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:i,placeholder:"Phone",className:"w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg",required:!0}),a.jsx("textarea",{name:"message",value:e.message,onChange:i,placeholder:"Message",className:"w-full resize-none rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg",rows:4,required:!0}),a.jsx("button",{type:"submit",className:"w-full rounded-md bg-link px-4 py-3 font-medium text-white shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-darkerBg focus:ring-opacity-50",children:"Submit"})]})}o=(l.then?(await l)():l)[0],r()}catch(e){r(e)}})},8484:(e,t,s)=>{"use strict";s.d(t,{DT:()=>o,Y8:()=>c,_S:()=>u,ds:()=>i,h9:()=>n,iX:()=>d,vx:()=>l});let r=process.env.WORDPRESS_API_URL;async function a(e="",{variables:t}={}){let s=await fetch(r,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t})}),a=await s.json();if(a.errors)throw console.error(a.errors),Error("Failed to fetch API");return a.data}async function n(){let e=await a(`
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
      `);return{content:t?.pages?.nodes[0]?.content||"",featuredImage:t?.pages?.nodes[0]?.featuredImage||""}}async function u(e="events"){let t=await a(`
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
  `);return e?.posts}},160:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{default:()=>c,getStaticProps:()=>p});var a=s(997),n=s(6836),o=s(8484),i=s(4350),d=s.n(i),l=s(9785),u=e([n,l]);function c({content:e,featuredImage:t}){return a.jsx("div",{children:a.jsx(n.Z,{children:(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"font-sans text-2xl lg:text-4xl pb-5",children:"Get Involved"}),a.jsx("div",{className:`font-serif text-lg prose ${d().content}`,dangerouslySetInnerHTML:{__html:e}}),a.jsx(l.Z,{})]})})})}[n,l]=u.then?(await u)():u;let p=async()=>{let e=await (0,o._S)();return{props:{content:e.content,featuredImage:e.featuredImage},revalidate:10}};r()}catch(e){r(e)}})},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},271:e=>{"use strict";e.exports=require("sweetalert2")},9752:e=>{"use strict";e.exports=import("@vercel/analytics/react")},7451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},9648:e=>{"use strict";e.exports=import("axios")},6197:e=>{"use strict";e.exports=import("framer-motion")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[859,263,673],()=>s(1206));module.exports=r})();