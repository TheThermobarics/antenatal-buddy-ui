import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListOfDoctorsPage from "./pages/ListOfDoctorsPage";
import MakeAppointment from "./pages/MakeAppointment";

import PrivateRoute from "./components/routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import { I18nPropvider, LOCALES } from "./i18nProvider";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import AncVisit from "./pages/AncVisit";
import EnterVisitDetails from "./pages/EnterVisitDetails";
import VisitData from "./pages/VisitData";
import BestPractices from "./pages/BestPractices";
import SinglePractice from "./pages/SinglePractice";
import ChangeLanguage from "./pages/ChangeLanguage";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    //eslint-disbale-next-line
  }, []);

  // const currentLanguage = useSelector((state) => state.auth.language);
  // console.log(currentLanguage);
  return (
    <Provider store={store}>
      <I18nPropvider locale={LOCALES.ENGLISH_US}>
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/doctor/dashboard"
            component={DoctorDashboard}
          />
          <PrivateRoute
            exact
            path="/dashboard/doctors"
            component={ListOfDoctorsPage}
          />
          <PrivateRoute
            exact
            path="/makeappointment/:docid"
            component={MakeAppointment}
          />
          <PrivateRoute exact path="/ancVisit" component={AncVisit} />
          <PrivateRoute
            exact
            path="/enterVisitDetails/:docid"
            component={EnterVisitDetails}
          />
          <PrivateRoute
            exact
            path="/getVisitData/:visitId"
            component={VisitData}
          />
          <PrivateRoute exact path="/bestpractices" component={BestPractices} />
          <PrivateRoute exact path="/practice" component={SinglePractice} />
          <PrivateRoute
            exact
            path="/changeLanguage"
            component={ChangeLanguage}
          />
        </Router>
      </I18nPropvider>
    </Provider>
  );
}
export default App;
