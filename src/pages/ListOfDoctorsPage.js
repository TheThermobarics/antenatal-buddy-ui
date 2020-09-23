import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllDoctors } from "../actions/patient";

import Navbar from "../components/DashboardComponents/Navbar";
import DoctorCard from "../components/Cards/DoctorCard";

const ListOfDoctorsPage = ({ getAllDoctors, patient: { doctors } }) => {
  useEffect(() => {
    getAllDoctors();
    console.log(doctors);
  }, [getAllDoctors]);
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
              {doctors !== null
                ? "Book an appointment with any of the following"
                : "Fetching Doctors......"}
            </p>
            <div class="flex flex-wrap -mx-4 text-center">
              {doctors !== null &&
                doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    name={doctor.name}
                    aboutMe={doctor.aboutMe}
                    specialization={doctor.specialization}
                    doctorId={doctor._id}
                  />
                ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, { getAllDoctors })(ListOfDoctorsPage);
