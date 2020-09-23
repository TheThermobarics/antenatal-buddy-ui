import React, { useEffect } from "react";
import { getAllAppointments } from "../../actions/patient";
import { connect } from "react-redux";

import AppointmentCard from "../Cards/AppointmentCard";
import PrescriptionCard from "../Cards/PrescriptionCard";

import "./MetaData.css";

const MetaData = ({ getAllAppointments, patient: { appointments }, user }) => {
  useEffect(() => {
    if (user) {
      getAllAppointments(user.data._id);
      console.log(appointments);
    }
  }, [getAllAppointments, user]);
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

            {appointments.length === 0
              ? "You can book an appointment with a doctor of your choosing"
              : appointments.map((appointment) => (
                  <AppointmentCard appointment={appointment} />
                ))}

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

const mapStateToProps = (state) => ({
  patient: state.patient,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getAllAppointments })(MetaData);
