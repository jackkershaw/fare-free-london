import SocialIcons from "./social-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkerBg w-full">
      <div className="p-5 lg:p-10 lg:mx-10 font-serif justify-between space-y-10 lg:space-y-0 flex flex-col lg:flex-row lg:items-end">
        <div className="flex flex-col lg:flex-row lg:flex-row-reverse lg:justify-between">
          <SocialIcons />
          <Link
            href="/getinvolved"
            aria-label="link to the get involved page"
            className="mt-8 lg:mr-5"
          >
            <button className="w-full rounded-lg bg-link px-4 py-3 font-medium text-white shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-hover focus:ring-opacity-50 ">
              Get Involved
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <p className="text-xl font-bold">
            Campaign for Free Public Transport in London
          </p>
        </div>

        <div className="lg:text-right">
          <p className="py-2 lg:py-0">
            Site by{" "}
            <a
              href="https://www.jackkershaw.net"
              target="_blank"
              className="font-bold
              text-link
              hover:text-hover
              active:text-link"
              aria-label="link to Jack Kershaw's website"
            >
              Jack Kershaw.
            </a>
          </p>
          <p className="py-2 lg:py-0">
            Source on{" "}
            <a
              href="https://github.com/jones58/fare-free-london"
              target="_blank"
              className="font-bold text-link hover:text-hover active:text-link"
              aria-label="link to the Fare Free London GitHub repository"
            >
              Github.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
