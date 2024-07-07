export default function SocialIcons() {
  return (
    <div className="flex flex-row lg:items-end justify-between space-x-5 lg:space-x-10 pb-4 pt-8 lg:pt-0 lg:pb-0 text-3xl">
      <a
        href="https://x.com/FareFreeLondon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Fare Free London Twitter page"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--twitter] text-link hover:text-hover active:text-link p-5 lg:p-0"></span>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61556766211971"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Fare Free London Facebook page"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--facebook] text-link hover:text-hover active:text-link p-5 lg:p-0"></span>
      </a>
      <a
        href="https://www.instagram.com/farefreelondon/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to the Fare Free London Instagram page"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--instagram] text-link hover:text-hover active:text-link p-5 lg:p-0"></span>
      </a>
      <a
        href="https://admin.farefreelondon.org/rss"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-end justify-end"
        aria-label="link to the Fare Free London Magazine RSS feed"
      >
        <span className="icon-[mdi--rss] text-link hover:text-hover active:text-link p-5 lg:p-0"></span>
      </a>
      <a
        aria-label="link to the Fare Free London email"
        href="mailto:info@farefreelondon.org"
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-end justify-end"
      >
        <span className="icon-[mdi--email] text-link hover:text-hover active:text-link p-5 lg:p-0">
          {" "}
        </span>
      </a>
    </div>
  );
}
