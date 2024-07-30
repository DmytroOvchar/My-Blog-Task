import Link from "next/link";

interface NavSectionProps {
  title: string;
  items: { name: string; href: string }[];
}

const NavSection: React.FC<NavSectionProps> = ({ title, items }) => (
  <nav>
    <h2 className="text-lg font-semibold mb-6">{title}</h2>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.name} className="text-red-[#3B3C4A]">
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavSection;
