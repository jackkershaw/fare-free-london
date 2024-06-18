import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug?: string;
}

export default function CoverImage({
  title,
  coverImage,
  slug,
}: Props) {
  const image = (
    <Image
      fill
      alt={coverImage?.node.altText}
      src={coverImage?.node.sourceUrl}
      className="object-cover object-center min-w-100 max-w-100 hover:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[30vh] lg:min-w-[18vw] lg:min-h-[24vh] overflow-hidden">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
