import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const FirstPage = () => {
  const backgroundImageUrl = 'url("../ice.jpg")';

  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover", // You can set other background properties here
    width: "100%", // Set width and height to fit your container
    height: "100vh",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    color: "#fff",
    fontSize: "24px",
  };

  return (
    <section
      id="history"
      style={divStyle}
      class="bg-center bg-no-repeat  bg-gray-100 bg-blend-multiply"
    >
      <div class="mx-auto  max-w-screen-xl  py-12 lg:py-12 px-7">
        <div className="flex items-center relative">
          <h1 class=" lg:text-9xl font-extrabold tracking-tight leading-none text-gray-400 text-6xl">
            01.
          </h1>
          <p className="absolute left-[12%] font-extrabold text-gray-600 text-3xl">
            HISTORY
          </p>
        </div>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-30">
          VS Code will then add the {/* */} around the selected code,
          effectively commenting it out. This is a handy feature for temporarily
          disabling or commenting out sections of code while you work on other
          parts of your project.A popular professional image editing software
          that supports PSD files and provides a wide array of advanced editing
          features.
        </p>
      </div>
      <div className="bg-gray-500 opacity-80 h-[25vh] w-full flex py-3 px-12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://w0.peakpx.com/wallpaper/350/318/HD-wallpaper-ice-mountain-nature-thumbnail.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2022/06/05/18/58/mountains-7244669_1280.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://thumbs.dreamstime.com/b/ice-mountain-17910.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://c8.alamy.com/comp/2HN6A3J/a-man-climbing-towards-the-top-of-the-mountain-with-an-ice-axe-2HN6A3J.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cache.desktopnexus.com/thumbseg/1397/1397618-bigthumbnail.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://coloradomountainschool.com/wp-content/uploads/2014/08/Mountaineering-Guide-Training-640x420.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FirstPage;
