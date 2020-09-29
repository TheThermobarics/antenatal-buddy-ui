import React, { useEffect } from "react";
import { getAllDoctors } from "../actions/patient";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Navbar from "../components/DashboardComponents/Navbar";

import DoctorCard from "./../components/Cards/DoctorCard";
import MetaData from "../components/DashboardComponents/MetaData";

const Dashboard = ({ getAllDoctors, patient: { doctors }, user }) => {
  let history = useHistory();
  //   useEffect(() => {
  //     if (user && user.data.role === "doctor") {
  //       history.push("/doctor/dashboard");
  //     }
  //   }, []);
  useEffect(() => {
    getAllDoctors();
    console.log(doctors);
  }, [getAllDoctors]);
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
                  {doctors !== null
                    ? "Book an appointment with the following or search for the ones that suit your medical needs"
                    : "Loading top doctors...."}
                </p>
                <div class="flex flex-wrap -mx-4 text-center">
                  {doctors !== null &&
                    doctors.map(
                      (doctor, idx) =>
                        idx < 3 && (
                          <DoctorCard
                            key={doctor._id}
                            name={doctor.name}
                            aboutMe={doctor.aboutMe}
                            specialization={doctor.specialization}
                            doctorId={doctor._id}
                          />
                        )
                    )}
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

const mapStateToProps = (state) => ({
  patient: state.patient,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllDoctors })(Dashboard);
