import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../../layouts/Layout";

const AppRoutes = (props) => {
  return (
    <Router>
      <React.Suspense>
        <Routes>
          <Route name="Layout" path="/"
            element={
              <Layout componentRoutes={props.componentRoutes} />
            }
          >
            {props.componentRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                name={"test"}
                element={<route.component securityKey={route.securityKey} />}
              />
            ))}
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
};

AppRoutes.propTypes = {
  componentRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.elementType.isRequired,
      securityKey: PropTypes.string,
    })
  ).isRequired,
};

export default AppRoutes;
