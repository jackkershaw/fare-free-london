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
  imageUrl,
  slug,
  altText,
}: Props) {
  const image = (
    <Image
      fill
      alt={coverImage?.node?.altText}
      src={coverImage?.node?.sourceUrl}
      className="object-cover object-center min-w-100 max-w-100 hover:scale-110 hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[30vh] lg:min-w-[18vw] lg:min-h-[24vh] overflow-hidden rounded-lg">
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
