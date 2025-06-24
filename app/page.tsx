import { getFrontPageContent } from "../lib/api";
import styles from "./IndexPage.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fare Free London",
  description: "Homepage for the Fare Free London Campaign",
  openGraph: {
    title: "Fare Free London",
    description: "Homepage for the Fare Free London Campaign",
    url: "https://www.farefreelondon.org/",
    images: "https://www.farefreelondon.org/images/banner-draft.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fare Free London",
    description: "Homepage for the Fare Free London Campaign",
    images: "https://www.farefreelondon.org/images/banner-draft.png",
  },
};

export default async function Index() {
  const data = await getFrontPageContent();
  const content = data.content;
  const featuredImage = data.featuredImage;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <Image
          width="1080"
          height="980"
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
          className="rounded-lg object-cover"
        />
      </div>
    </>
  );
}
