import React from "react";

const PrescriptionCard = () => {
  return (
    <div>
      <a
        href="#"
        class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
      >
        <div
          class="block h-24 w-2/5 lg:w-1/5 rounded overflow-hidden"
          style={{
            background: "url(https://i.imgur.com/AQHXe7m.jpg) center",
            backgroundSize: "cover",
          }}
        ></div>
        <div class="pl-3 w-3/5 ">
          <p class="text-xs text-gray-500 uppercase font-semibold">Date</p>
          <h3 class="text-md font-semibold leading-tight mb-3">
            Treatment Description
          </h3>
          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
            <div
              class="rounded-full w-5 h-5 mr-3"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center",
                backgroundSize: "cover",
              }}
            ></div>
            <div>Doctor Name</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PrescriptionCard;
