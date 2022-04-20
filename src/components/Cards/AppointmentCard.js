import React from "react";

const AppointmentCard = ({
  appointment: { date, time, additionalInfo, helper, isApproved, name },
}) => {
  let newDateInDateFormat = new Date(date);
  let stringDate = newDateInDateFormat.toString();
  return (
    <div className="mb-5">
      <a
        href=""
        className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
        style={{
          backgroundColor: "#2D3748",

          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 right-0 -mt-3 mr-3">
          <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
            <i className="mdi mdi-fire text-base align-middle"></i>{" "}
            <span className="align-middle">
              {isApproved ? "APPROVED" : "PENDING"}
            </span>
          </div>
        </div>
        <div className="h-48"></div>
        <h2 className="text-white text-2xlleading-tight mb-3 pr-5">
          General Appointment
        </h2>
        <h2 className="text-white text-2xlleading-tight mb-3 pr-5">
          Appointment Date : {stringDate}
        </h2>
        <h2 className="text-white text-2xlleading-tight mb-3 pr-5">
          Time: {time}
        </h2>
        <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
          {additionalInfo}
        </h2>
        {helper && helper.hospital && (
          <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
            Hospital&nbsp;: {helper.hospital}
          </h2>
        )}
        <div className="flex w-full items-center text-sm text-gray-300 font-medium">
          <div className="flex-1 flex items-center">
            <div
              className="rounded-full w-8 h-8 mr-3"
              style={{
                background: "url(https://i.imgur.com/DidT8Bm.png) center",
                backgroundSize: "cover",
              }}
            ></div>
            {helper && helper.name ? <div>{helper.name}</div> : name}
          </div>
        </div>
      </a>
    </div>
  );
};

export default AppointmentCard;
