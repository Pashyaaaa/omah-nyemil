import Carousel from "../components/Carousel";
import MotionTemplate from "../components/MotionTemplate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WaveComponent from "../components/WaveComponent";

const MenuPage = () => {
  return (
    <div id="menu" className="min-h-screen mt-36">
      <Navbar />
      <div className="w-72 relative">
        <MotionTemplate
          duration={1}
          delay={0.25}
          x={-100}
          y={0}
          vh={false}
          inf={false}
          opacity={1}
        >
          <span className="absolute -z-10 top-2 md:-left-2 -left-10 w-20 h-5 border bg-blue-500 rounded-r-xl"></span>
        </MotionTemplate>

        <MotionTemplate
          duration={0.25}
          delay={0.25}
          x={-100}
          y={0}
          vh={false}
          inf={false}
          opacity={1}
        >
          <span className="absolute -z-10 top-10 -left-24  w-64 md:w-96 h-5 border border-blue-500 rounded-r-xl"></span>
        </MotionTemplate>

        <MotionTemplate
          duration={0.5}
          delay={0.25}
          x={-200}
          y={0}
          vh={true}
          inf={false}
          opacity={0}
        >
          <h2 className="w-72 text-blue-500 text-3xl md:text-3xl font-semibold font-monserrat md:ml-24 ml-12 mb-14">
            All Menu📋
          </h2>
        </MotionTemplate>
      </div>

      <div className="relative p-5 mb-5 mx-5">
        <MotionTemplate
          duration={0.5}
          delay={0.25}
          x={0}
          y={100}
          vh={false}
          inf={false}
          opacity={0}
        >
          <h1 className="text-right text-2xl md:text-4xl right-0 font-pacifico relative">
            &raquo; Makanan &laquo;
          </h1>
        </MotionTemplate>
      </div>
      <Carousel type="makanan" />

      <WaveComponent />

      <div className="relative bg-[#88C0FF] p-5 bg-opacity-100 w-full">
        <MotionTemplate
          duration={0.5}
          delay={0.25}
          x={0}
          y={100}
          vh={false}
          inf={false}
          opacity={0}
        >
          <h1 className="text-slate-700 mb-5 mx-5 text-2xl md:text-4xl right-0 font-pacifico">
            &raquo; Minuman &laquo;
          </h1>
        </MotionTemplate>
      </div>
      <div className="pb-36 bg-[#88C0FF]">
        <Carousel
          type="minuman"
          classname="pb-5 text-slate-800"
          border_color="border-blue-200"
        />
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
