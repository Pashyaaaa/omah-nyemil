/* eslint-disable react/prop-types */
import { easeIn, motion } from "framer-motion";

const TitleMotion = (props) => {
  const {
    duration = 1,
    classname = "",
    x,
    y,
    delay = 0.25,
    ease = easeIn,
    children = " ",
  } = props;
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, x: x, y: y },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: duration,
        delay: delay,
        ease: ease,
      }}
      className={`banner-text ${classname} text-center text-white font-montserratAlternates font-semibold text-4xl md:text-6xl`}
    >
      {children}
    </motion.h2>
  );
};

export default TitleMotion;
