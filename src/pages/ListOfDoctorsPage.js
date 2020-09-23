import React from "react";

import Navbar from "../components/DashboardComponents/Navbar";
import DoctorCard from "../components/Cards/DoctorCard";

const ListOfDoctorsPage = () => {
  return (
    <>
      <Navbar />

      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <section class="pt-8 px-4 pb-4">
            <h2 class="text-4xl mb-2 leading-tight font-heading">
              List of Doctors
            </h2>
            <p class="max-w-xl mb-8 text-gray-500">
              Book an appointment with any of the following
            </p>
            <div class="flex flex-wrap -mx-4 text-center">
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ListOfDoctorsPage;
