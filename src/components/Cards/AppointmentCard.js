import React from "react";

const AppointmentCard = () => {
  return (
    <div class="mb-5">
      <a
        href="#"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
        style={{
          backgroundColor: "#2D3748",

          backgroundSize: "cover",
        }}
      >
        <div class="absolute top-0 right-0 -mt-3 mr-3">
          <div class="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
            <i class="mdi mdi-fire text-base align-middle"></i>{" "}
            <span class="align-middle">CURRENT</span>
          </div>
        </div>
        <div class="h-48"></div>
        <h2 class="text-white text-2xlleading-tight mb-3 pr-5">Address: KMC</h2>
        <h2 class="text-white text-2xlleading-tight mb-3 pr-5">
          Appointment Date : 23-09-20
        </h2>
        <h2 class="text-white text-2xlleading-tight mb-3 pr-5">
          Time: 6:30 p.m.
        </h2>
        <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">
          Root Canal
        </h2>
        <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">
          Hospital&nbsp;Name
        </h2>
        <div class="flex w-full items-center text-sm text-gray-300 font-medium">
          <div class="flex-1 flex items-center">
            <div
              class="rounded-full w-8 h-8 mr-3"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/women/74.jpg) center",
                backgroundSize: "cover",
              }}
            ></div>
            <div>Doctor&nbsp;Name</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AppointmentCard;
