import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { easeIn, easeInOut, motion } from "framer-motion";
import TitleMotion from "../components/TitleMotion.jsx";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import "./fontAwesome.js";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Banner from "../components/Banner.jsx";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 150;
      setIsVisible(!isScrolledDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex justify-center items-center w-full bottom-5 transform -translate-x-1/2 ${
        isVisible ? "block animate-bounce" : "hidden"
      } transition-opacity`}
    >
      <a
        href="#menu"
        className="focus:outline-none text-black text-center flex flex-col items-center mx-auto"
        aria-label="Scroll to bottom"
      >
        <span className="mb-1">Scroll Down!</span>
        <svg
          className="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </a>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className="-z-10 bg-cover bg-center h-screen bg-fixed flex justify-center items-center"
        style={{
          backgroundImage: "url(/langit.jpg)",
        }}
      >
        <div className="banner max-w-xl">
          <div className="title-banner">
            <div className="title-banner-child-1 flex justify-center items-center mt-20">
              <TitleMotion
                duration={0.5}
                x={-50}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                O
              </TitleMotion>
              <TitleMotion
                duration={0.8}
                x={0}
                y={75}
                delay={0.25}
                ease="easeInOut"
              >
                M
              </TitleMotion>
              <TitleMotion
                duration={1}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                A
              </TitleMotion>
              <TitleMotion
                duration={1.2}
                x={0}
                y={75}
                delay={0.25}
                ease="easeInOut"
                classname="md:mr-8 mr-3"
              >
                H
              </TitleMotion>
              <TitleMotion
                duration={0.5}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                N
              </TitleMotion>
              <TitleMotion
                duration={0.8}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                Y
              </TitleMotion>
              <TitleMotion
                duration={1}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                E
              </TitleMotion>
              <TitleMotion
                duration={1.2}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                M
              </TitleMotion>
              <TitleMotion
                duration={1.22}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                I
              </TitleMotion>
              <TitleMotion
                duration={1.24}
                x={0}
                y={-75}
                delay={0.25}
                ease="easeInOut"
              >
                L
              </TitleMotion>
              <TitleMotion
                duration={1}
                x={0}
                y={75}
                delay={1}
                type="spring"
                bounce={0.8}
              >
                🥡
              </TitleMotion>
            </div>
          </div>
          <motion.h5
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: easeInOut,
            }}
            className="text-center font-monserrat md:text-base text-xs p-5 mt-0 md:mt-5 mb-32 md:mx-0 mx-10 text-lime-400 font-semibold"
          >
            Welcome to Omah Nyemil-! The perfect place for those of you who are
            looking for delicious food, mouth-watering snacks, and refreshing
            drinks. Here, we prioritize the quality of our dishes.
          </motion.h5>
          <div className="banner-button flex justify-center items-center gap-5">
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 250 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: easeIn,
              }}
              className="border z-10 font-semibold text-green-500 px-5 py-2 rounded-full hover:ring-2 active:ring-0 ring-white bg-white active:bg-transparent hover:bg-green-300 transition-all"
            >
              <FontAwesomeIcon
                icon={["fab", "whatsapp"]}
                className="text-green-500 hover:text-green-700 text-xl"
              />{" "}
              Order Via Whatsapp
            </motion.button>
          </div>
        </div>
      </div>

      <ScrollArrow />
      <Banner />
      <Footer />
    </div>
  );
};

export default LandingPage;
