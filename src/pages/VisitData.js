import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVisitById } from "../actions/patient";

import { useHistory } from "react-router-dom";

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

  weight,

  pallor,

  pulse,

  rr,

  bp,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div> */}
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Pallor
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={pallor}
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

  weight,

  labInvestigation,

  sfh,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div> */}
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
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

  weight,

  labInvestigation,

  preeclampsia,

  anemia,

  iugr,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div> */}
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Preeclampsia
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="text"
              value={preeclampsia}
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

  weight,

  foetalPosition,

  birthPlan,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Date of visit
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              type="date"
              value={selectedDate}
              placeholder="When did the visit occur"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />{" "}
          </div>
        </div> */}
        <div className="w-full mx-2 flex-1 svelte-1l8159u">
          <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            {" "}
            Weight
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
            <input
              value={weight}
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

const VisitData = ({
  match,
  getVisitById,
  user,
  location,
  patient: { loadedVisit },
}) => {
  let history = useHistory();
  console.log(location.state.visitNumber);
  console.log(location.state.visitId);
  useEffect(() => {
    // loadUser();
    console.log("----------user------------------");
    console.log(user);
  }, [user]);
  useEffect(() => {
    if (user && user.data) {
      console.log("----------user ID------------------");
      console.log(user.data._id);
      getVisitById(location.state.visitId);
    }
    console.log("----------visits------------------");
    console.log(loadedVisit);
    console.log("----------visits------------------");
    console.log("----------visits------------------");
  }, [user, getVisitById]);
  return (
    <>
      <Navbar selectedRoute="visit" />
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Previous Visits' Data
          </h1>
        </div>
      </header>
      <div style={{ width: "80vw" }} className="p-5 mx-auto">
        <div className="mx-4 p-4">
          {location.state.visitNumber === 1 ? (
            <Visit1Header />
          ) : location.state.visitNumber === 2 ? (
            <Visit2Header />
          ) : location.state.visitNumber === 3 ? (
            <Visit3Header />
          ) : location.state.visitNumber === 4 ? (
            <Visit4Header />
          ) : (
            <></>
          )}
        </div>
        {loadedVisit && loadedVisit.length > 0 && (
          <div className="mt-8 p-4">
            <div>
              {location.state.visitNumber === 1 ? (
                <Visit1Form
                  selectedDate={
                    loadedVisit[0]["firstVisitDetails"]["dateOfVisit"]
                  }
                  weight={loadedVisit[0]["firstVisitDetails"]["weight"]}
                  pallor={loadedVisit[0]["firstVisitDetails"]["pallor"]}
                  pulse={loadedVisit[0]["firstVisitDetails"]["pulse"]}
                  rr={loadedVisit[0]["firstVisitDetails"]["rr"]}
                  bp={loadedVisit[0]["firstVisitDetails"]["bp"]}
                />
              ) : location.state.visitNumber === 2 ? (
                <Visit2Form
                  selectedDate={
                    loadedVisit[0]["secondVisitDetails"]["dateOfVisit"]
                  }
                  weight={loadedVisit[0]["secondVisitDetails"]["weight"]}
                  labInvestigation={
                    loadedVisit[0]["secondVisitDetails"]["labInvestigationsImg"]
                  }
                  sfh={loadedVisit[0]["secondVisitDetails"]["sfhMeasurement"]}
                />
              ) : location.state.visitNumber === 3 ? (
                <Visit3Form
                  selectedDate={
                    loadedVisit[0]["thirdVisitDetails"]["dateOfVisit"]
                  }
                  weight={loadedVisit[0]["thirdVisitDetails"]["weight"]}
                  labInvestigation={
                    loadedVisit[0]["thirdVisitDetails"]["labInvestigationsImg"]
                  }
                  preeclampsia={
                    loadedVisit[0]["thirdVisitDetails"]["preeclampsia"]
                  }
                  anemia={loadedVisit[0]["thirdVisitDetails"]["anemia"]}
                  iugr={loadedVisit[0]["thirdVisitDetails"]["IUGR"]}
                />
              ) : location.state.visitNumber === 4 ? (
                <Visit4Form
                  selectedDate={
                    loadedVisit[0]["fourthVisitDetails"]["dateOfVisit"]
                  }
                  weight={loadedVisit[0]["fourthVisitDetails"]["weight"]}
                  foetalPosition={
                    loadedVisit[0]["fourthVisitDetails"]["foetalPosition"]
                  }
                  birthPlan={
                    loadedVisit[0]["fourthVisitDetails"]["birthPlanImage"]
                  }
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  patient: state.patient,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getVisitById })(VisitData);
