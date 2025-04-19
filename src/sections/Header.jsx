import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => {
        setIsOpen(false);
        setActiveLink(title.toLowerCase());
      }}
      to={title.toLowerCase()}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className={clsx(
        "base-bold text-p4 uppercase transition-all duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5",
        "transform hover:scale-110",
        activeLink === title.toLowerCase() && "animate-bounce text-p1"
      )}
      onSetActive={() => setActiveLink(title.toLowerCase())}
      onSetInactive={() => setActiveLink("")}
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500 max-lg:py-4",
        hasScrolled
          ? "bg-black-100/70 backdrop-blur-[12px] shadow-md"
          : "bg-transparent py-10"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        {/* <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/logo.svg" width={115} height={55} alt="Abhishek" />
        </a> */}

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2/90 max-lg:backdrop-blur-md max-lg:opacity-0 transition-all duration-300",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="About" />
                  <div className="dot" />
                  <NavLink title="Skills" />
                  <div className="dot" />
                  <NavLink title="Projects" />
                  <div className="dot" />
                  <NavLink title="Experience" />
                  <div className="dot" />
                  <NavLink title="Contact" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="menu-toggle"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
