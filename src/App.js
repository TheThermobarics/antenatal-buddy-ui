import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import AncVisit from "./pages/AncVisit";
import EnterVisitDetails from "./pages/EnterVisitDetails";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    //eslint-disbale-next-line
  }, []);

  return (
    <Provider store={store}>
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
      </Router>
    </Provider>
  );
}
export default App;
