import HeroImage from "./hero-image";
import Link from "next/link";

export default function HeroPost({
  title,
  heroImage,
  excerpt,
  slug,
  category,
}) {
  let sentence: string = excerpt
    ? excerpt.split(/[.!?()...]/)[0].trim()
    : "";

  return (
    <section className="lg:py-5 mb-8 lg:mb-0 lg:grid lg:grid-cols-3 lg:items-end lg:w-full lg:gap-x-8">
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-5 lg:items-end lg:flex-between mb-8 lg:mb-0 lg:col-span-2">
        {heroImage && (
          <HeroImage title={title} heroImage={heroImage} slug={slug} />
        )}
        <div className="flex flex-col space-y-4">
          <Link
            className="uppercase text-customRed-950 font-sans font-bold"
            href={`/news?category=${category}`}
          >
            {category}
          </Link>
          <h1 className="text-2xl lg:text-3xl text-customRed-700 hover:text-customRed-950 capitalize">
            <Link
              href={`/posts/${slug}`}
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h1>
          <h2
            className="text-lg font-serif"
            dangerouslySetInnerHTML={{ __html: sentence }}
          />
        </div>
      </div>
      <Link
        href="/issues"
        className="text-lg font-bold font-sans text-primary-500"
      >
        {" "}
        <div className="bg-customRed-800 mb-10 lg:mb-0 p-5 w-full text-neutral-50 hover:bg-customRed-950 active:bg-customRed-500 right-0">
          {" "}
          Read The Latest Issue
        </div>
      </Link>
    </section>
  );
}
