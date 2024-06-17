import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="bg-customRed-50 w-full">
      <div className="p-5 lg:p-10 lg:mx-10 font-serif justify-between space-y-10 lg:space-y-0 flex flex-col lg:flex-row lg:items-end">
        <SocialIcons />
        <div className="flex items-center">
          <p className="text-xl font-sans ">Fare Free London</p>
        </div>
        <div className="lg:text-right">
          <p className="py-2 lg:py-0">
            Site by{" "}
            <a
              href="https://www.jackkershaw.net"
              target="_blank"
              className="font-bold
              text-customRed-800
              hover:text-customRed-950
              active:text-customRed-500"
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
              className="font-bold text-customRed-800 hover:text-customRed-950 active:text-customRed-500"
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
