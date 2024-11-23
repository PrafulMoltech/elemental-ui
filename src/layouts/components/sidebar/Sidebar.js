import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, } from "react-router-dom";

import { Menu } from "../menu/Customsidebarmenu";
import Iconify from "../../../components/ui/iconify/Iconify";

import "./Sidebar.scss";

const Sidebar = ({ sidebarCollapsed, toggleSidebarCollapsed, }) => {

    const location = useLocation();

    const menuItem = location.pathname;

    const sidebarRef = useRef(null);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedSubMenu, setSelectedSubMenu] = useState(null);
    const [navigationMenuList, setNavigationMenuList] = useState(null);

    useEffect(() => {
        setNavigationMenuList(Menu);
    }, [menuItem]);

    const handleClick = (menuKey, e) => {
        if (e) e.stopPropagation();
        setSelectedMenu((prevSelectedMenu) => prevSelectedMenu === menuKey ? null : menuKey);
        setSelectedSubMenu(null);
    };

    const handleSubMenuClick = (subMenuKey, e) => {
        if (e) e.stopPropagation();
        setSelectedSubMenu(subMenuKey);
    };

    return (
        <div
            className={`sidebar-section ${sidebarCollapsed ? "collapsed" : ""}`}
            ref={sidebarRef}
        >
            <nav className="sidebar">
                <div className="main-menus">


                    <div className="">
                        <button className=" icon menu-icon-btn" onClick={toggleSidebarCollapsed}>
                            <Iconify icon="flowbite:caret-left-outline" className="button-icon" />
                        </button>
                    </div>
                    <div className="sidebar-menu">

                        <ul className="sidebar-menu-list">
                            {navigationMenuList?.map((menuItem, index) => (
                                <button
                                    key={menuItem.menuKey}
                                    onClick={(e) => { handleClick(menuItem.menuKey, e); }}
                                    className={`menu-item ${selectedMenu === menuItem.menuKey ? "active-menu" : ""}`}
                                >
                                    <Link
                                        to={menuItem.navigationPath}
                                        className={`${menuItem.children ? "menu-arrow" : ""}`}
                                    >
                                        {!sidebarCollapsed ? menuItem.menuTitle : menuItem.collapsedMenuTitle}
                                        {menuItem.children && !sidebarCollapsed &&
                                            < Iconify icon="ep:arrow-down-bold" className="button-icon" />
                                        }
                                    </Link>
                                    {selectedMenu === menuItem.menuKey && menuItem.children && (
                                        <ul className={`sidebar-dropdown ${sidebarCollapsed ? 'collapsed-sub-menu' : ''}`}>
                                            {menuItem?.children?.map((item, subIndex) => (
                                                <button
                                                    key={item.menuKey}
                                                    onClick={(e) => { handleSubMenuClick(item.id, e) }}
                                                    className={`dropdown-menus ${selectedSubMenu === item.menuKey ? "active-submenu" : ""}`}
                                                >
                                                    <Link to={item.navigationPath}>
                                                        <span className={sidebarCollapsed ? 'slide-in-right' : 'slide-in-left'}>
                                                            {item.subMenuName}
                                                        </span>
                                                    </Link>
                                                </button>
                                            ))}
                                        </ul>
                                    )}
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
};

Sidebar.propTypes = {
    sidebarCollapsed: PropTypes.bool.isRequired, 
    toggleSidebarCollapsed: PropTypes.func.isRequired,
};

export default Sidebar;

