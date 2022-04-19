import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeAppointment } from "../actions/patient";
import Navbar from "../components/DashboardComponents/Navbar";

const MakeAppointment = ({ match, makeAppointment, user, location }) => {
  let history = useHistory();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    additionalInfo: "",
  });

  const { date, time, additionalInfo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log({ date, time, additionalInfo });
    console.log(user.data._id);
    console.log(match.params.docid);

    let splitDate = date.split("-");
    let newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

    makeAppointment({
      date: newDate,
      time,
      additionalInfo,
      helper: match.params.docid,
      mother: user.data._id,
      name: location.state.name,
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
                name="additionalInfo"
                value={additionalInfo}
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
