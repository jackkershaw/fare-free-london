import Layout from "../components/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h1
          className="text-4xl text-center mb-10 lg:text-left lg:text-8xl lg:mb-20
    "
        >
          Page not found
        </h1>
        <Link
          href="/"
          className="text-xl text-center mb-10 lg:text-left"
        >
          <p className="text-link hover:text-hover active:text-link lg:text-4xl font-sans">
            Click here to return to the home page
          </p>
        </Link>
      </div>
    </Layout>
  );
}
