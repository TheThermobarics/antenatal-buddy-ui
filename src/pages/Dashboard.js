import React, { useEffect, useState } from "react";
import { getAllDoctors } from "../actions/patient";
import { loadUser } from "../actions/auth";
import { connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

import { KEYS } from "../i18nProvider/constants";
import { getTranslatedMessage } from "../i18nProvider/messages";

import Navbar from "../components/DashboardComponents/Navbar";

import DoctorCard from "./../components/Cards/DoctorCard";
import MetaData from "../components/DashboardComponents/MetaData";
import CountDownTimer from "../components/Timer/CountDownTimer";

const getWeekDifference = (pregnancyWeek) => {
  const ancWeeks = [16, 24, 30, 34];
  if (pregnancyWeek < ancWeeks[0]) {
    return ancWeeks[0] - pregnancyWeek;
  } else if (pregnancyWeek < ancWeeks[1]) {
    return ancWeeks[1] - pregnancyWeek;
  } else if (pregnancyWeek < ancWeeks[2]) {
    return ancWeeks[2] - pregnancyWeek;
  } else if (pregnancyWeek < ancWeeks[3]) {
    return ancWeeks[3] - pregnancyWeek;
  } else return 0;
};

const Dashboard = ({
  language,
  getAllDoctors,
  patient: { doctors },
  user,
  loadUser,
}) => {
  let history = useHistory();
  const NOW_IN_MS = new Date().getTime();
  useEffect(() => {
    // loadUser();
    console.log("----------user------------------");
    console.log(user);
  }, [user]);
  useEffect(() => {
    getAllDoctors();
    console.log(doctors);
  }, [getAllDoctors]);

  if (user && user.data.role === "helper") {
    return <Redirect to="/doctor/dashboard" />;
  }

  return (
    <>
      <div>
        <Navbar selectedRoute="dashboard" />

        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              {getTranslatedMessage(language, KEYS.DASHBOARD_HEADING)}
            </h1>
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
              <section class="pt-8 px-4 pb-4">
                <h2 class="text-4xl mb-2 leading-tight font-heading">
                  {getTranslatedMessage(language, KEYS.TOP_DOCTORS)}
                </h2>
                <p class="max-w-xl mb-8 text-gray-500">
                  {doctors !== null
                    ? getTranslatedMessage(language, KEYS.NO_DOCTORS)
                    : getTranslatedMessage(language, KEYS.LOADING_DOCTORS)}
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
              {user && user.data && user.data.weekOfPregnancy && (
                <>
                  <section class="pt-8 px-4 pb-4">
                    <h2 class="text-4xl ml-2 mb-2 leading-tight font-heading">
                      {getTranslatedMessage(
                        language,
                        KEYS.NEXT_ANC_VISIT_COUNTER
                      )}
                    </h2>
                    <CountDownTimer
                      targetDate={
                        NOW_IN_MS +
                        getWeekDifference(user.data.weekOfPregnancy) *
                          7 *
                          24 *
                          60 *
                          60 *
                          1000
                      }
                    />
                  </section>
                </>
              )}
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
  language: state.auth.language,
});

export default connect(mapStateToProps, { getAllDoctors, loadUser })(Dashboard);
