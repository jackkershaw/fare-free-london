# fare-free-london

Website for the Fare Free London Campaign

## Planning

- Gathered inspo from various sources and collected in this repo and on Are.na.
- Made moodboard in Figma
- Desktop and mobile designs in Figma
- Used [vital signs](https://www.vitalsignsmag.org/) as a base for getting going with the site. I decided I wanted to use NextJS with a Wordpress backend again and use [WPGraphQL](https://www.wpgraphql.com/) as the API.
- finished figma sketches, decided fonts.

## Building

- Edited Vital signs nextjs template.
- Replace template fonts with P22 Underground for the body and headings.
- Improved the mobile heading by making it fill the screen on opening on mobile. This gives a more polished look and prevents the user clicking in the wrong place.
- Made a favicon using a vector from [public domain vectors](https://publicdomainvectors.org), putting it through [realfavicongenerator.net](https://realfavicongenerator.net/).
- Changed the colour scheme. It was helpful to go through the template looking for customRed (using Search on all files) and replacing it with my own colours.
- Set up wordpress on admin.farefreelondon.org subdomain and Vercel on main domain: farefreelondon.org.
- The site was looking quite cold so i wanted to add some colour. I added an svg from another project I did a few years ago, with bright colourful lines. At first I wanted this at the bottom and top, but found having at the top a bit overwhelming. I kept it at the bottom and wrapped it in a component as "tubelines" - in a way it reminds me of how the old OpenAI site used to look under the footer.
- Removed frontpage component and added to index.tsx. Receiving content through Wordpress to allow client to control content.
- Used Responsively to get responsive design right - see my LinkedIn about this [here](https://www.linkedin.com/posts/jackkershaw_webdevelopment-responsivedesign-devtools-activity-7209579627588005889-Bwso?utm_source=share&utm_medium=member_desktop).
- Added a sign up form to the site. Since I was on a tight deadline from the client, I used a similar approach to the form on my [Right to the City project](https://github.com/jones58/right-to-city).
- Add back to top button, again taken from my [Right to the City project](https://github.com/jones58/right-to-city). I then edited the component as needed for this project.
- Added get involved button to the footer to drive traffic to the get involved page. I put it here because I wanted people to see it after scrolling to bottom.

## Debugging

- I noticed there was a bug in the mobile menu, where clicking on a link for a page you're already on didn't make it go away - I fixed this by adding an onClick event handler to each link to set the menuOpen state to false.
- Some users were reporting slow loading times. I used unlighthouse to check the speed of the site.
  - Switched to the next/image component to set the appropriate sizes.
  - Switched footer image to low priority
  - Preconnect to va.vercel-scripts.com to speed up the site.
  - NextJS recommends optional 'sharp' package for image optimisation, so I installed it.
    Read more: https://nextjs.org/docs/messages/sharp-missing-in-production
  - All these things improved LCP from 11.3s to 2.8s, bringing Performance score up from 67 to 96.
- NextJS told me there was an issue with using a legacy prop, "layout", on images so i changed this, to use width and height with object-cover instead.
- Used [NextJS docs](https://nextjs.org/docs/pages/building-your-application/configuring/debugging) for further debugging on both the server and client sides. In particular, the VScode debugging option was very useful.
  - Used this to add the priority property to the banner image, as it was identified as part of the LCP.
- There was an issue with builds on Vercel where sometimes the whole site would end up blank (at least requiring a reload), and i'd have to redeploy. I fixed this by changing the details in the package.json as instructed in[this tutorial](https://www.youtube.com/watch?v=U89A0l6AM18). This didn't seem to fix it, so I used a generic .htaccess file to fix it instead.
