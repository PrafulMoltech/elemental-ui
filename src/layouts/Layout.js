import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebarCollapsed = () => {
    setSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`main-page-layout`}>
      <div className={`middle-page-section`}>
        <div className={`center-content-part ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <Sidebar
            componentRoutes={props.componentRoutes}
            sidebarCollapsed={sidebarCollapsed}
            toggleSidebarCollapsed={toggleSidebarCollapsed}
          />
          <div className="right-sec-part">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  componentRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.element.isRequired,
      name: PropTypes.string,
    })
  ),
};

export default Layout;
