import React from "react";
import Login from "./login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Employees from "./Employee";
import PrivateRoute from "./Auth";
import Departments from "./Department";
import "./theme.css";

function App() {
  return (
    <Router>
      <div className="body-background">
        <div className="App">
          <div className="content">
            <Routes>
              <Route exact path="/corp-app-man-frontend" component={Login} />
              <PrivateRoute
                exact
                path="/corp-app-man-frontend/dashboard"
                component={Dashboard}
              />
              <PrivateRoute
                exact
                path="/corp-app-man-frontend/Employee"
                component={Employees}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path="/corp-app-man-frontend/Department"
                component={Departments}
              ></PrivateRoute>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
