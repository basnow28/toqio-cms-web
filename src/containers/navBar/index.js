import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { NavBarComponents } from "./navBarComponents";
import './navBar.css';


function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const NavBarComponent = (item, index) => {
    return (
      <li key={index} className="nav-text">
        <Link to={item.path} >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    )
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li>
              <Link to="#" className="navbar-toggle">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavBarComponents.map((item, index) => NavBarComponent(item, index))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar;