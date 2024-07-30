import Link from "next/link";

import MainLogo from "./icons/MainLogo";
import IconSearch from "./icons/IconSearch";
import Toggle from './Toggle'

const Header = () => {
  return (
    <header className={`flex items-center justify-between py-8 w-full`}>
      <Link href="/" className="flex items-center">
        <MainLogo />
      </Link>
      <nav className="mx-4">
        <ul className="flex justify-center space-x-10 text-base text-[#3B3C4A] font-normal">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/post" className="hover:underline">
              Single Post
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:underline">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[166px] bg-[#F4F4F5] py-2 pl-4 pr-8 rounded-[5px] outline-none placeholder-[#A1A1AA] placeholder:text-[14px] text-black"
          />
          <IconSearch />
        </div>
      <Toggle />
      </div>
    </header>
  );
};

export default Header;
