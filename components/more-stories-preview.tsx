import CoverImage from "./more-stories-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
  category,
}) {
  let sentence: string = excerpt
    ? excerpt.split(/[.!?()]/)[0].trim()
    : "";

  return (
    <div className="mb-6 lg:mb-0">
      <div className="flex flex-col space-y-2 lg:space-y-3">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
          />
        )}
        <Link
          className="text-customRed-950 uppercase text-sm font-bold font-sans"
          href={`/news?category=${category}`}
        >
          {category}
        </Link>
        <h1 className="text-2xl text-customRed-700 hover:text-customRed-950 capitalize">
          <Link
            href={`/posts/${slug}`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h1>
        <div
          className="font-serif text-lg"
          dangerouslySetInnerHTML={{ __html: sentence }}
        />
      </div>
    </div>
  );
}
