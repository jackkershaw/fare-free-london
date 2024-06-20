import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-darkerBg lg:px-10 pb-5 mb-5 lg:mb-0">
      <div className="lg:grid lg:grid-cols-2 lg:mx-10">
        <div className="flex flex-row items-end justify-between px-5 lg:px-0 lg:justify-start lg:space-y-10 bg-darkerBg">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-5xl text-link pr-5 pb-8"
            type="button"
            aria-label="menu"
          >
            {menuOpen ? (
              <span className="icon-[mdi--arrow-up] text-link"></span>
            ) : (
              <span className="icon-[mdi--hamburger-menu] text-link"></span>
            )}
          </button>
          <Link href="/" className="max-h-[220px] ">
            <div className="min-w-[250px] min-h-[250px] lg:min-w-[20vw] lg:min-h-[20vh] relative">
              <Image
                src="/images/banner-draft.png"
                alt="logo"
                fill
                className="object-contain object-center"
                sizes="(100vw, 100vh)"
              />
            </div>
          </Link>
        </div>
        {/* mobile menu */}
        <div className="flex flex-row lg:flex-col lg:justify-end lg:hidden">
          {menuOpen && (
            <motion.div
              className="absolute lg:static space-y-8 justify-start w-full flex flex-col z-50 bg-darkerBg h-[80vh] pl-5 lg:pl-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col space-y-12 text-4xl font-sans font-bold py-10 pl-5">
                <Link
                  href="/aims"
                  className="text-link hover:text-hover active:text-link"
                  aria-label="link to the aims page"
                >
                  Our Aims
                </Link>
                <Link
                  href="/news?category="
                  className="text-link hover:text-hover active:text-link"
                  aria-label="link to the news page"
                >
                  Latest News
                </Link>
                <Link
                  href="/getinvolved"
                  className="text-link hover:text-hover active:text-link"
                  aria-label="link to the get involved page"
                >
                  Get Involved
                </Link>
              </div>
            </motion.div>
          )}
        </div>
        {/* desktop menu */}
        <div className="hidden lg:flex flex-row lg:flex-col lg:justify-end">
          <div className="space-x-10 space-y-8 lg:space-y-0 lg:items-center justify-end w-full flex flex-col lg:flex-row z-50 bg-darkerBg">
            <div className="flex flex-row items-center space-x-10 text-3xl font-sans font-bold pb-6">
              <Link
                href="/aims"
                className="text-link hover:text-hover active:text-link"
                aria-label="link to the aims page"
              >
                Our Aims
              </Link>
              <Link
                href="/news"
                className="text-link hover:text-hover active:text-link"
                aria-label="link to the news page"
              >
                Latest News
              </Link>

              <Link
                href="/getinvolved"
                className="text-link hover:text-hover active:text-link"
                aria-label="link to the get involved page"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/desktop.svg"
        alt="desktop"
        className="hidden lg:block"
      />
    </header>
  );
}
