import React from "react";

const LastPage = () => {
  const backgroundImageUrl = 'url("../hike.jpg")';

  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover", // You can set other background properties here
    width: "100%", // Set width and height to fit your container
    height: "80vh",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    color: "#fff",
    fontSize: "24px",
  };

  return (
    <section
      id="team"
      style={divStyle}
      class=" bg-no-repeat  bg-gray-100 bg-blend-multiply"
    >
      <div class="px-[20%]  max-w-screen-xl text-center py-24 lg:py-20">
        <div className="bg-white opacity-75 h-[20rem] w-[20rem] p-6">
          <div>
            <h1 className="text-blue-950 font-extrabold flex items-start ">
              SCHEDULE
            </h1>
          </div>
          <div className="text-blue-950 text-base space-y-4">
            <div className="flex gap-10">
              <p>25 Nov 2024</p> <p>VEstibulum Viverra</p>
            </div>

            <div className="flex gap-10">
              <p>28 Nov 2024</p> <p>VEstibulum Viverra</p>
            </div>
            <div className="flex gap-10 pt-4">
              <p>18 Dec 2024</p> <p>VEstibulum Viverra</p>
            </div>
            <div className="flex gap-10 pt-4">
              <p>7 Jan 2024</p> <p>VEstibulum Viverra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastPage;
