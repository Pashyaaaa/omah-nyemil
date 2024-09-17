/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataProduk from "../dataProduk.json";
import { useState } from "react";
import MotionTemplate from "./MotionTemplate";

const Carousel = ({ type, classname, border_color }) => {
  let data = "";

  if (type == "makanan") {
    data = dataProduk.data[0].makanan;
  } else if (type == "minuman") {
    data = dataProduk.data[1].minuman;
  }

  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (e) => {
    setSelectedItem(e);
    setIsOpen(!isOpen);
  };

  return (
    <MotionTemplate
      duration={0.25}
      delay={0.25}
      x={0}
      y={0}
      vh={false}
      inf={false}
      opacity={0}
      className="slider-container"
    >
      <Slider {...settings} className={`${classname}`}>
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className={`card mx-5 border-x-2 ${border_color} rounded-t-lg`}
            >
              <div className="relative">
                <img
                  src={e.gambar}
                  alt={e.nama}
                  className="rounded-t-lg object-cover object-center w-full h-56"
                  loading="lazy"
                />
                <span
                  className={`absolute p-2 bottom-0 right-0 rounded-tl-xl ${
                    type == "makanan" ? "bg-blue-500" : "bg-white"
                  }`}
                >
                  <button
                    className={`${
                      type == "makanan" ? "text-white" : "text-black"
                    } text-xs font-bold font-monserrat`}
                    onClick={() => {
                      toggleModal(e);
                    }}
                  >
                    {e.nama} Details &raquo;
                  </button>
                </span>
              </div>
              <div className="px-5 py-3">
                <h1 className="text-right font-bold text-xl">{e.nama}</h1>
                <button
                  onClick={() => {
                    toggleModal(e);
                  }}
                >
                  <p className="text-left font-base pt-3">
                    {e.deskripsi
                      ? e.deskripsi.length > 60
                        ? e.deskripsi.substring(0, 60) + "..."
                        : e.deskripsi
                      : ""}
                  </p>
                </button>
                <p className="font-semibold pt-5 text-xl">
                  Rp{e.harga.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div>
        {isOpen && (
          <div className="fixed z-20 inset-0 w-9/12 mx-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div className="fixed inset-0 bg-black opacity-75"></div>
              <MotionTemplate
                duration={1}
                delay={0}
                x={0}
                y={100}
                vh={false}
                inf={false}
                opacity={1}
                type="spring"
                bounce={0.5}
                className="slider-container"
              >
                <div className="max-w-sm relative w-full xl:mx-20 2xl:max-w-full lg:max-w-2xl lg:flex justify-center">
                  <button
                    className="absolute font-bold text-xl font-monserrat z-20 top-0 2xl:right-36 right-0 text-black shadow-2xl shadow-white 2xl:rounded-br-xl rounded-bl-xl bg-red-500 px-5 lg:bg-none"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                  <img
                    className={`w-full h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover object-center`}
                    src={`./${selectedItem.gambar}`}
                  ></img>
                  <div className="border-r h-auto 2xl:h-72 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <div className="text-gray-900 font-bold text-xl mb-2 lg:mt-5">
                        {selectedItem.nama}
                      </div>
                      <p className="text-gray-700 xl:text-lg text-sm break-normal">
                        {selectedItem.deskripsi}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src="./logo-omah-nyemil-3976.png"
                        alt="Avatar of Jonathan Reinink"
                        loading="lazy"
                      />
                      <div className="text-sm">
                        <p className="text-gray-900 font-bold leading-none">
                          Rp{selectedItem.harga.toLocaleString()}
                        </p>
                        <p className="text-gray-600">Omah Nyemil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionTemplate>
            </div>
          </div>
        )}
      </div>
    </MotionTemplate>
  );
};

export default Carousel;
