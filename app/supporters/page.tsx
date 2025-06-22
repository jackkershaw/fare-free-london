import { getSupportersPageContent } from "../../lib/api";
import SplitContent from "./splitContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supporters",
  description: "Hear from supporters of the Fare Free London Campaign",
};

export default async function SupportersPage() {
  const data = await getSupportersPageContent();
  const content = data.content || "";

  return (
    <div>
      <h1 className="text-4xl text-center lg:text-left">Supporters</h1>
      <SplitContent content={content} />
    </div>
  );
}
