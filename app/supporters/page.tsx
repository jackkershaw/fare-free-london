import { getSupportersPageContent } from "../../lib/api";
import SplitContent from "./splitContent";

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
