import React from "react";
import AppointmentCard from "../Cards/AppointmentCard";
import PrescriptionCard from "../Cards/PrescriptionCard";

import "./MetaData.css";

const MetaData = () => {
  return (
    <>
      <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div
          class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
          style={{ width: "80vw" }}
        >
          <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div class="mb-3">
              <h1 class="text-3xl font-bold">Appointments</h1>
              <p class="text-sm text-gray-500 uppercase font-bold">
                DATE : THURSDAY 6 AUGUST
              </p>
            </div>
            <AppointmentCard />

            <div class="mb-3">
              <h1 class="text-3xl font-bold">Prescriptions</h1>
            </div>
            <PrescriptionCard />
            <hr class="border-gray-200 my-3" />
            <PrescriptionCard />
            <hr class="border-gray-200 my-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaData;
