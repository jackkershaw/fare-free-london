import Image from "next/image";
import { getAboutPageContent } from "../../lib/api";
import styles from "./AimsPage.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Find out more about the Fare Free London Campaign",
};

export default async function About() {
  const data = await getAboutPageContent();
  let content = data.content;
  const featuredImage = data.featuredImage;

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center lg:text-left">Aims</h1>
        <div className="pt-4 lg:w-[40vw] lg:h-auto lg:mx-auto">
          <Image
            width="1080"
            height="980"
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            className="rounded-lg object-cover lg:mx-auto"
            priority
          />
        </div>
        <div className={`${styles.content}`}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </div>
  );
}
