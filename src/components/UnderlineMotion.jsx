import MotionTemplate from "./MotionTemplate";

const UnderlineMotion = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <MotionTemplate
        duration={1}
        delay={0.5}
        x={50}
        vh={false}
        inf={Infinity}
        opacity={1}
      >
        <span className="absolute -z-10 w-40 h-5 border bottom-4 -right-8 bg-blue-500 rounded-b-xl"></span>
      </MotionTemplate>
      <MotionTemplate
        duration={1}
        delay={0.25}
        x={50}
        vh={false}
        inf={Infinity}
        opacity={1}
      >
        <span className="absolute -z-10 w-40 h-5 border bottom-4 -right-8 bg-blue-300 rounded-b-xl"></span>
      </MotionTemplate>
      <MotionTemplate
        duration={1}
        delay={0}
        x={50}
        vh={false}
        inf={Infinity}
        opacity={1}
      >
        <span className="absolute -z-10 w-40 h-5 border bottom-4 -right-8 bg-blue-500 rounded-b-xl"></span>
      </MotionTemplate>
    </div>
  );
};

export default UnderlineMotion;
