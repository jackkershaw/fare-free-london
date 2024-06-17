import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  heroImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  slug?: string;
}

export default function heroImage({ title, heroImage, slug }: Props) {
  const image = (
    <Image
      fill
      alt={heroImage?.node.altText}
      src={heroImage?.node.sourceUrl}
      className="object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
    />
  );
  return (
    <div className="relative min-w-[30vw] min-h-[30vh] lg:min-w-[35vw] lg:min-h-[40vh] overflow-hidden">
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
