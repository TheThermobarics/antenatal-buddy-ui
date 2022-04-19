import React, { useEffect } from "react";
import { connect } from "react-redux";

import Navbar from "../components/DashboardComponents/Navbar";

import PrescriptionCard from "../components/Cards/PrescriptionCard";

const AncVisit = () => {
  return (
    <>
      <Navbar />
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            ANC Visits
          </h1>
        </div>
      </header>

      <div class="min-w-screen   flex items-center justify-center px-5 py-5">
        <div
          class="bg-white text-gray-800  overflow-hidden relative flex"
          style={{ width: "80vw" }}
        >
          <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
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

export default AncVisit;
