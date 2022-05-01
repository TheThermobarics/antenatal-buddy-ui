import React from "react";

import Navbar from "../components/DashboardComponents/Navbar";

const bestPracticesData = [
  {
    date: " Jan 20, 2022",
    img: "https://i.imgur.com/SsykgbT.jpg",
    heading: "Balanced Diet",
    caption: `Supplementary iron therapy is needed for all pregnant mothers from 20 weeks onwards.`,
    bodyText: "",
  },
  {
    date: " Jan 21, 2022",
    img: "https://i.imgur.com/wKzwnE5.jpg",
    heading: "Rest and Sleep",
    caption: `8 hour sleep at night. 2 hour sleep after mid-day meal.`,
    bodyText: "",
  },
  {
    date: " Jan 22, 2022",
    img: "https://i.imgur.com/eRoOX50.jpg",
    heading: "Prenatal Exercise",
    caption: `Walk in moderation. Avoid lifting heavy things. Avoid long standing time.`,
    bodyText: "",
  },
];

const BestPractices = () => {
  return (
    <>
      <Navbar selectedRoute="practices" />
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Best Practices
          </h1>
        </div>
      </header>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <section className=" lg:pt-[120px] pb-10 lg:pb-20">
            <div className="container">
              <div className="flex flex-wrap -mx-4">
                {bestPracticesData.map((el) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="max-w-[370px] mx-auto mb-10">
                      <div className="rounded overflow-hidden mb-8">
                        <img src={el.img} alt="image" className="w-full" />
                      </div>
                      <div>
                        <span
                          className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     
                     text-xs
                     leading-loose
                     font-semibold
                     
                     mb-5
                     "
                        >
                          {el.date}
                        </span>
                        <h3>
                          <a
                            href=""
                            className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                          >
                            {el.heading}
                          </a>
                        </h3>
                        <p className="text-base text-body-color">
                          {el.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BestPractices;
