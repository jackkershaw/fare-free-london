export default function SocialIcons() {
  return (
    <div className="flex flex-row lg:items-end justify-between space-x-5 lg:space-x-10 pb-4 lg:pb-0 text-3xl">
      <a
        href="https://www.twitter.com/healthworkersu1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Fare Free London Twitter page"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--twitter] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 lg:p-0"></span>
      </a>
      <a
        href="https://www.instagram.com/vitalsignsmag/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Fare Free London Instagram page"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--instagram] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 lg:p-0"></span>
      </a>
      <a
        href="https://vitalsignscontenteditor.co.uk/rss"
        target="_blank"
        className="flex items-end justify-end"
        aria-label="link to the Fare Free London Magazine RSS feed"
      >
        <span className="icon-[mdi--rss] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 lg:p-0"></span>
      </a>
      <a
        aria-label="link to the Fare Free London email"
        href="mailto:vitalsignsmag@proton.me"
        target="_blank"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--email] text-customRed-700 hover:text-customRed-950 active:text-customRed-500 p-5 lg:p-0">
          {" "}
        </span>
      </a>
    </div>
  );
}
