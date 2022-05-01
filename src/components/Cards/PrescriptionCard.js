import React from "react";
import { useHistory } from "react-router-dom";

const PrescriptionCard = ({
  doctorName,
  doctorId,
  visitNumber,
  patientId,
  visitId,
}) => {
  let history = useHistory();
  return (
    <div>
      <a
        href=""
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
            Current Visit Number: {visitNumber}
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
            <div>Doctor: {doctorName}</div>
          </div>
        </div>
        <div className="mt-2 ml-3">
          <button
            disabled={visitNumber > 3}
            onClick={() => {
              history.push({
                pathname: `/enterVisitDetails/${doctorId}`,
                state: {
                  visitNumber,
                  patientId,
                },
              });
            }}
            class="cursor-pointer bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
          >
            {visitNumber > 3 ? "All Visits Complete" : "Enter Visit Details"}
          </button>
        </div>
        <div className="mt-2 ml-3">
          <button
            disabled={visitNumber < 1}
            onClick={() => {
              history.push({
                pathname: `/getVisitData/${visitId}`,
                state: {
                  visitNumber,
                  visitId,
                },
              });
            }}
            class="cursor-pointer bg-gray-700 hover:bg-gray-600 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
          >
            View Previous Report
          </button>
        </div>
      </a>
    </div>
  );
};

export default PrescriptionCard;
