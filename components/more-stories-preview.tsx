import CoverImage from "./more-stories-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  let sentence: string = excerpt
    ? excerpt.split(/[.!?()]/)[0].trim()
    : "";

  return (
    <div className="mb-6 lg:mb-0 bg-darkerBg bg-opacity-30 hover:bg-opacity-50 p-8 rounded-lg">
      <div className="flex flex-col space-y-2 lg:space-y-3">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
          />
        )}
        <Link href={`/posts/${slug}`}>
          <h1
            className="text-2xl text-link hover:text-hover capitalize"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <div
            className="font-serif text-lg"
            dangerouslySetInnerHTML={{ __html: sentence }}
          />
        </Link>
      </div>
    </div>
  );
}
