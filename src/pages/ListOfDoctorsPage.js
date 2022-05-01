import React, { useEffect } from "react";
import { connect } from "react-redux";

import { KEYS } from "../i18nProvider/constants";
import { getTranslatedMessage } from "../i18nProvider/messages";
import { getAllDoctors } from "../actions/patient";

import Navbar from "../components/DashboardComponents/Navbar";
import DoctorCard from "../components/Cards/DoctorCard";

const ListOfDoctorsPage = ({
  language,
  getAllDoctors,
  patient: { doctors },
}) => {
  useEffect(() => {
    getAllDoctors();
    console.log(doctors);
  }, [getAllDoctors]);
  return (
    <>
      <Navbar selectedRoute="doctors" />

      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <section class="pt-8 px-4 pb-4">
            <h2 class="text-4xl mb-2 leading-tight font-heading">
              {getTranslatedMessage(language, KEYS.LIST_OF_DOCTORS)}
            </h2>
            <p class="max-w-xl mb-8 text-gray-500">
              {doctors !== null
                ? getTranslatedMessage(language, KEYS.NO_DOCTORS)
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
  language: state.auth.language,
});

export default connect(mapStateToProps, { getAllDoctors })(ListOfDoctorsPage);
