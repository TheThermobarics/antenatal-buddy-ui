import React, { useEffect } from "react";
import {
  getAllAppointmentsForDoctor,
  getAllVisitsForDoctor,
} from "../actions/helper";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { format } from "date-fns";

import Navbar from "../components/DashboardComponents/Navbar";

import "./DoctorDashboard.css";

const ApprovedWidget = () => {
  return (
    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
      <span
        aria-hidden
        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
      ></span>
      <span class="relative">Checked</span>
    </span>
  );
};

const PendingWidget = () => {
  return (
    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
      <span
        aria-hidden
        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
      ></span>
      <span class="relative">Pending</span>
    </span>
  );
};

const TableRow = ({ name, email, time, date, patientId, status }) => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src="https://i.imgur.com/x5jFCY0.png"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{name}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">
          {format(new Date(date), "MM/dd/yyyy")}
        </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{time}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {status ? <ApprovedWidget /> : <PendingWidget />}
      </td>
    </tr>
  );
};

const VisitRow = ({ name, patientId, email, visitNumber }) => {
  return (
    <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
      <td class="border-grey-light border hover:bg-gray-100 p-3 myTd">
        {name}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 truncate myTd">
        {email}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 truncate myTd">
        {visitNumber}
      </td>
      <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer myTd">
        View Report
      </td>
    </tr>
  );
};

const DoctorDashboard = ({
  getAllAppointmentsForDoctor,
  getAllVisitsForDoctor,
  user,
  helper: { helperAppointments, helperVisits },
}) => {
  useEffect(() => {
    // loadUser();
    console.log("----------user------------------");
    console.log(user);
  }, [user]);
  useEffect(() => {
    if (user && user.data) {
      getAllAppointmentsForDoctor(user.data._id);
    }

    console.log("--------------");
    console.log(helperAppointments);
  }, [user, getAllAppointmentsForDoctor]);

  useEffect(() => {
    if (user && user.data) {
      getAllVisitsForDoctor(user.data._id);
    }

    console.log("--------------");
    console.log(helperVisits);
  }, [user, getAllVisitsForDoctor]);

  if (user && user.data.role === "mother") {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
      <Navbar selectedRoute="dashboard" isDoctor={true} />
      <div class="antialiased font-sans bg-gray-200">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <h2 class="text-2xl font-semibold leading-tight">Appointments</h2>
            </div>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Patient
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Appointment Date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Appointment Time
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {helperAppointments !== null &&
                      helperAppointments.map((helperAppointment, idx) => (
                        <TableRow
                          key={helperAppointment._id}
                          name={helperAppointment.mother.name}
                          email={helperAppointment.mother.email}
                          time={helperAppointment.time}
                          date={helperAppointment.date}
                          patientId={helperAppointment.mother._id}
                          status={helperAppointment.isApproved}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center"
        style={{ height: "100%", backgroundColor: "#EDF2F7", padding: "5px" }}
        id="myDiv"
      >
        <div class="container">
          <h2 class="text-2xl font-semibold leading-tight">ANC Visits</h2>
          <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 myTable">
            <thead class="text-white myThead">
              {helperVisits !== null &&
                helperVisits.map((helperVisit, idx) => (
                  <tr
                    key={idx}
                    class="bg-blue-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
                  >
                    <th class="p-3 text-left myTh">Name</th>
                    <th class="p-3 text-left myTh">Email</th>
                    <th class="p-3 text-left myTh">Visit Number</th>
                    <th class="p-3 text-left myTh" width="110px">
                      Actions
                    </th>
                  </tr>
                ))}

              {/* <tr class="bg-blue-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left myTh">Name</th>
                <th class="p-3 text-left myTh">Email</th>
                <th class="p-3 text-left myTh" width="110px">
                  Actions
                </th>
              </tr> */}
              {/* <tr class="bg-blue-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left myTh">Name</th>
                <th class="p-3 text-left myTh">Email</th>
                <th class="p-3 text-left myTh" width="110px">
                  Actions
                </th>
              </tr> */}
              {/* <tr class="bg-blue-900 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left myTh">Name</th>
                <th class="p-3 text-left myTh">Email</th>
                <th class="p-3 text-left myTh" width="110px">
                  Actions
                </th>
              </tr> */}
            </thead>
            <tbody class="flex-1 sm:flex-none">
              {helperVisits !== null &&
                helperVisits.map((helperVisit, idx) => (
                  <VisitRow
                    key={idx}
                    name={helperVisit.mother.name}
                    patientId={helperVisit.mother._id}
                    email={helperVisit.mother.email}
                    visitNumber={helperVisit.visitNumber}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  helper: state.helper,
});

export default connect(mapStateToProps, {
  getAllAppointmentsForDoctor,
  getAllVisitsForDoctor,
})(DoctorDashboard);
