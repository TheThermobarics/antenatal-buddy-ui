import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  create1stMedicalVisit,
  create2ndMedicalVisit,
  create3rdMedicalVisit,
  create4thMedicalVisit,
} from "../actions/patient";

import Navbar from "../components/DashboardComponents/Navbar";

const Visit1Header = () => {
  return (
    <div className="flex items-center">
      {/* <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" /> */}
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 1
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 2
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 3
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 4
        </div>
      </div>
    </div>
  );
};
const Visit2Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 1
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 2
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 3
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 4
        </div>
      </div>
    </div>
  );
};
const Visit3Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 1
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 2
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 3
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300" />
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
          Visit 4
        </div>
      </div>
    </div>
  );
};
const Visit4Header = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 1
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 2
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-teal-600 relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 2
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600" />
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-database "
          >
            <ellipse cx={12} cy={5} rx={9} ry={3} />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
          Visit 4
        </div>
      </div>
    </div>
  );
};

const Visit1Form = ({
  selectedDate,
  setSelectedDate,
  weight,
  setWeight,
  pallor,
  setPallor,
  pulse,
  setPulse,
  rr,
  setRR,
  bp,
  setBP,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Pallor
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={pallor}
              onChange={(e) => setPallor(e.target.value)}
              placeholder="Remarks regarding Pallor"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Pulse
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              placeholder="Pulse Value"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            RR
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={rr}
              onChange={(e) => setRR(e.target.value)}
              placeholder="Relative Risk"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            BP
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={bp}
              onChange={(e) => setBP(e.target.value)}
              placeholder="Enter BP value"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter patient weight"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
const Visit2Form = ({
  selectedDate,
  setSelectedDate,
  weight,
  setWeight,
  labInvestigation,
  setLabInvestigation,
  sfh,
  setSFH,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter patient weight"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            SFH
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={sfh}
              onChange={(e) => setSFH(e.target.value)}
              placeholder="Enter SFH Measurement"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Lab Investigation
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="file"
              placeholder="Attach image"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
const Visit3Form = ({
  selectedDate,
  setSelectedDate,
  weight,
  setWeight,
  labInvestigation,
  setLabInvestigation,
  preeclampsia,
  setPreeclampsia,
  anemia,
  setAnemia,
  iugr,
  setIUGR,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Preeclampsia
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={preeclampsia}
              onChange={(e) => setPreeclampsia(e.target.value)}
              placeholder="Remarks regarding Preeclampsia"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Anemia
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={anemia}
              onChange={(e) => setAnemia(e.target.value)}
              placeholder="Remarks regarding anemia"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            IUGR
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={iugr}
              onChange={(e) => setIUGR(e.target.value)}
              placeholder="Remarks regarding IUGR"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Lab Investigation
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="file"
              placeholder="Attach Image"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter patient weight"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};
const Visit4Form = ({
  selectedDate,
  setSelectedDate,
  weight,
  setWeight,
  foetalPosition,
  setFoetalPosition,
  birthPlan,
  setBirthPlan,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter patient weight"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Foetal Position
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={foetalPosition}
              onChange={(e) => setFoetalPosition(e.target.value)}
              type="text"
              placeholder="Enter Foetal Position Details"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Birth Plan
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="file"
              placeholder="Attach image"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

const EnterVisitDetails = ({
  match,
  location,
  create1stMedicalVisit,
  create2ndMedicalVisit,
  create3rdMedicalVisit,
  create4thMedicalVisit,
}) => {
  console.log(match.params.docid);
  console.log(location.state.visitNumber);
  console.log(location.state.patientId);
  let history = useHistory();

  const [selectedDate, setSelectedDate] = useState("25-10-2022");
  const [pallor, setPallor] = useState("");
  const [pulse, setPulse] = useState("");
  const [rr, setRR] = useState("");
  const [bp, setBP] = useState("");
  const [weight, setWeight] = useState(50);
  const [sfh, setSFH] = useState("");
  const [labInvestigation, setLabInvestigation] = useState("some url");
  const [preeclampsia, setPreeclampsia] = useState("");
  const [anemia, setAnemia] = useState("");
  const [iugr, setIUGR] = useState("");
  const [foetalPosition, setFoetalPosition] = useState("");
  const [birthPlan, setBirthPlan] = useState("some url");

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

      <div style={{ width: "80vw" }} className="p-5 mx-auto">
        <div className="mx-4 p-4">
          {location.state.visitNumber === 0 ? (
            <Visit1Header />
          ) : location.state.visitNumber === 1 ? (
            <Visit2Header />
          ) : location.state.visitNumber === 2 ? (
            <Visit3Header />
          ) : location.state.visitNumber === 3 ? (
            <Visit4Header />
          ) : (
            <></>
          )}
        </div>
        <div className="mt-8 p-4">
          <div>
            {location.state.visitNumber === 0 ? (
              <Visit1Form
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                weight={weight}
                setWeight={setWeight}
                pallor={pallor}
                setPallor={setPallor}
                pulse={pulse}
                setPulse={setPulse}
                rr={rr}
                setRR={setRR}
                bp={bp}
                setBP={setBP}
              />
            ) : location.state.visitNumber === 1 ? (
              <Visit2Form
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                weight={weight}
                setWeight={setWeight}
                labInvestigation={labInvestigation}
                setLabInvestigation={setLabInvestigation}
                sfh={sfh}
                setSFH={setSFH}
              />
            ) : location.state.visitNumber === 2 ? (
              <Visit3Form
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                weight={weight}
                setWeight={setWeight}
                labInvestigation={labInvestigation}
                setLabInvestigation={setLabInvestigation}
                preeclampsia={preeclampsia}
                setPreeclampsia={setPreeclampsia}
                anemia={anemia}
                setAnemia={setAnemia}
                iugr={iugr}
                setIUGR={setIUGR}
              />
            ) : location.state.visitNumber === 3 ? (
              <Visit4Form
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                weight={weight}
                setWeight={setWeight}
                foetalPosition={foetalPosition}
                setFoetalPosition={setFoetalPosition}
                birthPlan={birthPlan}
                setBirthPlan={setBirthPlan}
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex p-2 mt-4">
            <button
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
              onClick={() => {
                history.push({
                  pathname: `/ancVisit`,
                });
              }}
            >
              Back
            </button>
            <div className="flex-auto flex flex-row-reverse">
              <button
                onClick={() => {
                  console.log(selectedDate);
                  console.log(pallor);
                  console.log(pulse);
                  console.log(rr);
                  console.log(bp);
                  console.log(weight);
                  console.log(sfh);
                  console.log(labInvestigation);
                  console.log(preeclampsia);
                  console.log(anemia);
                  console.log(iugr);
                  console.log(foetalPosition);
                  console.log(birthPlan);

                  let splitDate = selectedDate.split("-");
                  let newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;

                  if (location.state.visitNumber === 0) {
                    create1stMedicalVisit(
                      location.state.patientId,
                      match.params.docid,
                      newDate,
                      pallor,
                      pulse,
                      rr,
                      bp,
                      weight,
                      labInvestigation
                    );
                  } else if (location.state.visitNumber === 1) {
                    create2ndMedicalVisit(
                      location.state.patientId,
                      match.params.docid,
                      newDate,
                      sfh,
                      weight,
                      labInvestigation
                    );
                  } else if (location.state.visitNumber === 2) {
                    create3rdMedicalVisit(
                      location.state.patientId,
                      match.params.docid,
                      newDate,
                      preeclampsia,
                      anemia,
                      iugr,
                      weight,
                      labInvestigation
                    );
                  } else if (location.state.visitNumber === 3) {
                    create4thMedicalVisit(
                      location.state.patientId,
                      match.params.docid,
                      newDate,
                      foetalPosition,
                      weight,
                      birthPlan
                    );
                  }
                  history.push("/ancVisit");
                }}
                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition"
              >
                Submit
              </button>
              <button
                className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  create1stMedicalVisit,
  create2ndMedicalVisit,
  create3rdMedicalVisit,
  create4thMedicalVisit,
})(EnterVisitDetails);
