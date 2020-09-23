import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeAppointment } from "../actions/patient";
import Navbar from "../components/DashboardComponents/Navbar";

const MakeAppointment = ({ match, makeAppointment, user }) => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
  });

  const { date, time, reason } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ date, time, reason });
    console.log(user.data._id);
    console.log(match.params.docid);

    makeAppointment({
      date,
      time,
      reason,
      doctor: match.params.docid,
      patient: user.data._id,
    });
    history.push("/dashboard");
  };
  return (
    <>
      <Navbar />
      <section className="py-12 px-4">
        <h2 className="text-3xl mb-8 text-center font-heading">
          Schedule an Appointment
        </h2>
        <div className="w-full max-w-2xl mx-auto mb-12">
          <form onSubmit={onSubmit}>
            <div className="flex mb-4 -mx-2">
              <div className="w-full px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="date"
                  placeholder="date"
                  name="date"
                  value={date}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="flex mb-4 -mx-2">
              <div className="w-full px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="time"
                  placeholder="time"
                  name="time"
                  value={time}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Reason for the appointment..."
                rows="5"
                name="reason"
                value={reason}
                onChange={(e) => onChange(e)}
                required
              ></textarea>
            </div>
            <div>
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { makeAppointment })(MakeAppointment);
