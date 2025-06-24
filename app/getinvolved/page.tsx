import Image from "next/image";
import { getEventsPageContent } from "../../lib/api";
import styles from "./GetInvolved.module.css";
import Form from "../../components/form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Get involved in the Fare Free London Campaign",
};

export default async function Events() {
  const data = await getEventsPageContent();
  const content = data.content;
  const featuredImage = data.featuredImage;

  return (
    <div>
      <div>
        <h1 className="text-4xl lg:text-left">Get Involved</h1>
        <div className="pt-4 lg:w-[40vw] lg:h-auto lg:mx-auto">
          <Image
            width={1080}
            height={980}
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            className="rounded-lg object-cover lg:mx-auto"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..."
          />
        </div>
        <div className={`${styles.content} `}>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl mb-6">Contact Us</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
