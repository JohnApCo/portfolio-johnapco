import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
//icons
import { FaEnvelopeOpen, FaHome, FaSuitcase, FaUserAlt } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const navRoutes = [
  { href: "/", title: "Home", icon: <FaHome /> },
  { href: "/about", title: "About", icon: <FaUserAlt /> },
  { href: "/portfolio", title: "Portfolio", icon: <FaSuitcase /> },
  { href: "/contact", title: "Contact", icon: <FaEnvelopeOpen /> },
];

const NavItem = ({ icon, title, href = "" }) => {
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

const NavItemDesktop = ({ icon, title, href = "" }) => {
  const router = useRouter();
  return (
    <li
      className={`${
        router.pathname === href && "text-primary"
      } relative mx-8 border-b-[1px] border-divider_menu`}
    >
      <Link href={href} legacyBehavior>
        <a className="block text-2xl py-4 relative [&_svg]:inline-block">
          {icon}
          <span className="absolute left-10">{title}</span>
        </a>
      </Link>
    </li>
  );
};

function NavMenu() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-[100px] right-7 z-50 h-[calc(100%-200px)] flex items-center">
      <ul className="hidden lg:block">
        {navRoutes.map((el, index) => (
          <NavItem key={index} href={el.href} icon={el.icon} title={el.title} />
        ))}
      </ul>
      <nav role="navigation" className="block lg:hidden">
        <div id="menuToggle">
          <button
            className={`fixed top-1 right-2 sm:top-8 sm:right-8 z-50 select-none p-2 border-[1px] text-4xl rounded-md border-transparent bg-divider ${
              !open ? "sm:border-divider_menu" : "border-transparent"
            }`}
            onClick={handleClose}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
          <ul
            className={`fixed top-0 left-0 w-full h-full pt-16 bg-divider ${
              !open && "-translate-x-full"
            } `}
            id="menu"
          >
            {navRoutes.map((el, index) => (
              <NavItemDesktop
                key={index}
                href={el.href}
                icon={el.icon}
                title={el.title}
              />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default NavMenu;
