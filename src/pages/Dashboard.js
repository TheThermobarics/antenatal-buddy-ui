import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import { logout } from "../actions/auth";
import { connect } from "react-redux";

import Navbar from "../components/DashboardComponents/Navbar";

import DoctorCard from "./../components/Cards/DoctorCard";
import MetaData from "../components/DashboardComponents/MetaData";

const Dashboard = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  return (
    <>
      <div>
        <Navbar />

        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <section class="pt-8 px-4 pb-4">
                <h2 class="text-4xl mb-2 leading-tight font-heading">
                  Top Doctors
                </h2>
                <p class="max-w-xl mb-8 text-gray-500">
                  Book an appointment with the following or search for the ones
                  that suit your medical needs
                </p>
                <div class="flex flex-wrap -mx-4 text-center">
                  <DoctorCard />
                  <DoctorCard />
                  <DoctorCard />
                </div>
              </section>
            </div>
          </div>
        </main>
        <MetaData />
      </div>
    </>
  );
};

export default connect(null, { logout })(Dashboard);
