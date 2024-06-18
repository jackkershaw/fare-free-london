import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";

export default function PostHeader({ title, coverImage, category }) {
  return (
    <div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:pb-8">
        <div className="flex flex-col lg:items-end lg:flex-row lg:gap-x-10">
          <div className="">
            <CoverImage title={title} coverImage={coverImage} />
          </div>
          <div className="mt-8 lg:max-w-[300px]">
            <PostTitle>{title}</PostTitle>
          </div>
        </div>
      </div>
    </div>
  );
}
