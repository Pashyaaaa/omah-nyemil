import { easeInOut, motion } from "framer-motion";
/* eslint-disable react/prop-types */
function MotionTemplate({
  children,
  x,
  y,
  delay,
  duration,
  vh,
  inf,
  opacity,
  type = "",
  bounce,
  ease = easeInOut,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: vh }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: inf,
        repeatType: "reverse",
        type: type,
        bounce: type ? bounce : "",
        ease: ease,
      }}
      variants={{
        hidden: { opacity: opacity, x: x, y: y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default MotionTemplate;
