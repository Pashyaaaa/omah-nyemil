import { useState, useEffect } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenuPath = window.location.pathname === "/menu";

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 768); // Change to true if screen width <= 768 (mobile size)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.nav
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: easeIn,
      }}
      className={`w-full p-4 flex justify-center gap-40 items-center fixed top-0 z-20 transition-all duration-300 ${
        isMenuOpen ? "shadow-none" : "shadow-xl"
      } ${scrolled || isMenuPath === "/menu" ? "bg-white" : "bg-transparent"}`}
    >
      <div className="flex items-center">
        <img
          src="/logo-omah-nyemil-3976.png"
          alt="Logo"
          className="w-10 h-10 mr-2 rounded-full"
        />
        <div className="flex flex-col">
          <p
            className={`text-xl font-monserrat font-semibold ${
              scrolled || isMenuPath ? "text-black" : "text-white"
            } shadow-2xl`}
          >
            Omah Nyemil
          </p>
          <p
            className={`text-sm font-light ${
              scrolled || isMenuPath ? "text-black" : "text-white"
            }`}
          >
            https://omahnyemil.vercel.com
          </p>
        </div>
      </div>

      {isMobile ? (
        <button
          className={`${
            scrolled || isMenuPath ? "text-gray-700" : "text-white"
          } hover:text-black focus:outline-none `}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      ) : (
        <ul className="flex gap-10">
          <li>
            <a
              href="/"
              className={`hover:text-gray-600 ${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } font-semibold font-monserrat`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/menu"
              className={`hover:text-gray-600 ${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } font-semibold font-monserrat`}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`hover:text-gray-600 ${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } font-semibold font-monserrat`}
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      {isMobile && isMenuOpen && (
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.25,
            ease: easeInOut,
          }}
          className={`absolute rounded-b-xl border-b-2 border-black top-16 left-0 right-0 shadow-2xl ${
            scrolled || isMenuPath ? "bg-white" : "bg-transparent"
          } flex flex-col items-center gap-5 p-8 transition-all`}
        >
          <li>
            <motion.a
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.3,
                ease: easeInOut,
              }}
              href="/"
              className={`${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } hover:text-gray-400 font-semibold transition-all`}
            >
              Home🏡
            </motion.a>
          </li>
          <li>
            <motion.a
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.3,
                ease: easeInOut,
              }}
              href="/menu"
              className={`${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } hover:text-gray-400 font-semibold transition-all`}
            >
              List Menu🍜
            </motion.a>
          </li>
          <li>
            <motion.a
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.3,
                ease: easeInOut,
              }}
              href="/#contact"
              className={`${
                scrolled || isMenuPath ? "text-black" : "text-white"
              } hover:text-gray-400 font-semibold transition-all`}
            >
              Contact☎️
            </motion.a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
