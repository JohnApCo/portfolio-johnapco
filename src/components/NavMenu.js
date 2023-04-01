import Link from "next/link";
import { useRouter } from "next/router";
//icons
import { FaEnvelopeOpen, FaHome, FaSuitcase, FaUserAlt } from "react-icons/fa";

const NavItem = ({ icon, title, href }) => {
  const router = useRouter();
  return (
    <li
      className={`${
        router.pathname === href ? "bg-primary text-background" : ""
      } relative w-12 h-12 grid items-center my-5 mx-0 text-xl leading-none bg-divider rounded-full [&_svg]:absolute [&_svg]:right-0 [&_svg]:left-0 [&_svg]:block [&_svg]:m-auto [&_svg]:pointer-events-none hover:bg-primary hover:text-background`}
    >
      <Link href={href} legacyBehavior>
        <a
          className={
            "w-12 h-12 rounded-full block p-0 [&_h2]:hover:opacity-100 [&_h2]:hover:text-center [&_h2]:hover:rounded-l-full [&_h2]:hover:right-6"
          }
        >
          <h2 className="absolute -z-10 top-0 right-0 leading-[3rem] text-background font-medium uppercase h-12 text-sm opacity-0 bg-primary pl-8 pr-7 m-0 ">
            {title}
          </h2>
        </a>
      </Link>
      {icon}
    </li>
  );
};

function NavMenu() {
  return (
    <header className="fixed top-[100px] right-7 z-50 h-[calc(100%-200px)] flex items-center">
      <ul>
        <NavItem icon={<FaHome />} title="Home" href="/" />
        <NavItem icon={<FaUserAlt />} title="About" href="/about" />
        <NavItem icon={<FaSuitcase />} title="Portfolio" href="/portfolio" />
        <NavItem icon={<FaEnvelopeOpen />} title="Contact" href="/contact" />
      </ul>
    </header>
  );
}
export default NavMenu;
