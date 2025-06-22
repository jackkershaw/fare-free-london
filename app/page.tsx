import { getFrontPageContent } from "../lib/api";
import styles from "./IndexPage.module.css";
import Image from "next/image";
import Head from "next/head";

export default async function Index() {
  const data = await getFrontPageContent();
  const content = data.content;
  const featuredImage = data.featuredImage;
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={featuredImage.node.sourceUrl}
          as="image"
        />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div>
          <Image
            width="1080"
            height="980"
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
