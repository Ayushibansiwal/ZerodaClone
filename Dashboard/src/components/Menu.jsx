import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Menu = () => {
  const location = useLocation();

  const [profileOpen, setProfileOpen] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/",
      icon: <DashboardOutlinedIcon fontSize="small" />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <ReceiptLongOutlinedIcon fontSize="small" />,
    },
    {
      name: "Holdings",
      path: "/holdings",
      icon: <AccountBalanceWalletOutlinedIcon fontSize="small" />,
    },
    {
      name: "Positions",
      path: "/positions",
      icon: <CandlestickChartOutlinedIcon fontSize="small" />,
    },
    {
      name: "Funds",
      path: "/funds",
      icon: <SavingsOutlinedIcon fontSize="small" />,
    },
    {
      name: "Apps",
      path: "/apps",
      icon: <AppsOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <header className="menu-container">
      <div className="logo-section">
        <img src="/logo.png" alt="Logo" className="logo" />

        <h4>TradeDesk</h4>
      </div>

      <nav className="nav-links">
        {menus.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div
        className="profile-section"
        onClick={() => setProfileOpen(!profileOpen)}
      >
        <div className="avatar">
          A
        </div>

        <div className="profile-info">
          <h5>Ayushi</h5>
          <small>Investor</small>
        </div>

        <KeyboardArrowDownOutlinedIcon
          className={`arrow ${profileOpen ? "rotate" : ""}`}
        />

        {profileOpen && (
          <div className="profile-dropdown">
            <p>My Profile</p>
            <p>Settings</p>
            <p>Reports</p>
            <hr />
            <p className="logout">Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Menu;