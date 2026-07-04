import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  function hanldeClick(idx) {
    setSelectedMenu(idx);
  }

  function handleProfileDropdown() {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              className="text-decoration-none"
              onClick={() => hanldeClick(0)}
            >
              {" "}
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-decoration-none"
              onClick={() => hanldeClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link 
              to="/holdings" className="text-decoration-none"
              onClick={()=> hanldeClick(2)}>
              {" "}
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link 
              to="/positions" className="text-decoration-none"
              onClick={()=> hanldeClick(3)}>
              {" "}
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link 
              to="/funds" 
              className="text-decoration-none"
              onClick={()=> hanldeClick(4)}>
              {" "}
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link 
              to="/apps" 
              className="text-decoration-none"
              onClick={()=> hanldeClick(5)}>
              {" "}
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <div className="profile" onClick={handleProfileDropdown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

          {/* Profile DropDown */}


      </div>
    </div>
  );
}

export default Menu;
