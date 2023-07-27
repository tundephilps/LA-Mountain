import React from "react";

const Hero = () => {
  const backgroundImageUrl = 'url("../mountain.jpg")';

  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover", // You can set other background properties here
    width: "100%", // Set width and height to fit your container
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "24px",
  };

  return (
    <section
      style={divStyle}
      class="bg-center bg-no-repeat bg-gray-100 bg-blend-multiply"
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class=" text-6xl font-extrabold tracking-tight leading-none  text-gray-700 md:text-5xl lg:text-9xl">
          LOS ANGELES
        </h1>
        <h1 class="mb-4 text-6xl font-extrabold tracking-tight leading-none text-blue-900 md:text-5xl lg:text-9xl">
          MOUNTAINS
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
      </div>
    </section>
  );
};

export default Hero;
