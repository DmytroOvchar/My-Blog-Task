import Link from "next/link";
import FooterLogo from "./icons/FooterLogo";

import MetaBlogLogo from "./icons/MetaBlogLogo";
import AboutSection from "./AboutSection ";
import NavSection from "./NavSection";
import NewsletterSection from "./NewsLetterSection";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F7]">
      <div className="flex justify-between items-center py-16 border-b border-[#DCDDDF]">
        <AboutSection email="info@jstemplate.net" phone="880 123 456 789" />
        <div className="flex gap-x-20">
          <NavSection
            title="Quick Link"
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Blog", href: "/blog" },
              { name: "Archived", href: "/archived" },
              { name: "Author", href: "/author" },
              { name: "Contact", href: "/contact" },
            ]}
          />
          <NavSection
            title="Category"
            items={[
              { name: "Lifestyle", href: "/" },
              { name: "Technology", href: "/" },
              { name: "Travel", href: "/" },
              { name: "Business", href: "/" },
              { name: "Economy", href: "/" },
              { name: "Sports", href: "/" },
            ]}
          />
        </div>
        <NewsletterSection />
      </div>
      <div className="flex justify-between items-center py-[32px]">
        <div className="flex gap-x-[10px]">
          <FooterLogo />
          <div>
            <MetaBlogLogo />
            <p>© JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>
        <div className="divide-x divide-[#E8E8EA] text-[#3B3C4A]">
          <Link className="px-4 first:pl-0" href="/">
            Terms of Use
          </Link>
          <Link className="px-4" href="/">
            Privacy Policy
          </Link>
          <Link className="px-4 last:pr-0" href="/">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
