import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  imageUrl: string;
  altText?: string;
  slug?: string;
}

export default function CoverImage({
  title,
  coverImage,
  slug,
  altText,
}: Props) {
  const image = (
    <Image
      fill
      alt={altText}
      src={coverImage?.node.sourceUrl}
      className="object-cover object-center rounded-lg"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[40vh] lg:min-w-[21vw] lg:min-h-[25vh]">
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
