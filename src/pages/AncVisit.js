import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDoctorWiseVisits } from "../actions/patient";

import Navbar from "../components/DashboardComponents/Navbar";

import PrescriptionCard from "../components/Cards/PrescriptionCard";

const AncVisit = ({
  getDoctorWiseVisits,
  patient: { medicalVisits },
  user,
}) => {
  useEffect(() => {
    // loadUser();
    console.log("----------user------------------");
    console.log(user);
  }, [user]);
  useEffect(() => {
    if (user && user.data) {
      console.log("----------user ID------------------");
      console.log(user.data._id);
      getDoctorWiseVisits(user.data._id);
    }
    console.log("----------visits------------------");
    console.log(medicalVisits);
  }, [user, getDoctorWiseVisits]);
  return (
    <>
      <Navbar selectedRoute="visit" />
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
            {medicalVisits !== null &&
              medicalVisits.map((visit, idx) => (
                <>
                  <PrescriptionCard
                    key={idx}
                    doctorName={visit.helper.name}
                    doctorId={visit.helper._id}
                    visitNumber={visit.visit.visitNumber}
                    patientId={user.data._id}
                    visitId={visit.visit._id}
                  />
                  <hr class="border-gray-200 my-3" />
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getDoctorWiseVisits })(AncVisit);
