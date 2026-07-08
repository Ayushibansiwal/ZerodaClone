import React,{useState,useEffect} from "react";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

const Summary = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch(`${baseUrl}/api/user`, { credentials: "include" })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }, []);

  return (
    <div className="summary-container">
      <div className="welcome-card">
        <div>
          <h2 className="fs-4">Good Morning,  {user?.username || "Guest"}👋</h2>
          <p>Here's a quick overview of your portfolio today.</p>
        </div>

        <div className="market-status">
          <span className="live-dot"></span>
          Market Open
        </div>
      </div>

      {/* Summary Cards */}

      <div className="summary-grid">

        <div className="summary-card">
          <div className="card-icon blue">
            <AccountBalanceWalletOutlinedIcon />
          </div>

          <h5>Available Margin</h5>

          <h2>₹3,740</h2>

          <small>Opening Balance ₹3,740</small>
        </div>

        <div className="summary-card">
          <div className="card-icon green">
            <TrendingUpOutlinedIcon />
          </div>

          <h5>Total Holdings</h5>

          <h2 className="profit">
            ₹1,553
          </h2>

          <small>+5.20% Overall Profit</small>
        </div>

        <div className="summary-card">
          <div className="card-icon orange">
            <SavingsOutlinedIcon />
          </div>

          <h5>Current Value</h5>

          <h2>₹31,429</h2>

          <small>Investment ₹29,876</small>
        </div>

      </div>

      {/* Portfolio Card */}

      <div className="portfolio-card">

        <div className="portfolio-row">
          <span>Total Investment</span>

          <strong>₹29,876</strong>
        </div>

        <div className="portfolio-row">
          <span>Current Value</span>

          <strong>₹31,429</strong>
        </div>

        <div className="portfolio-row">
          <span>Today's Profit</span>

          <strong className="profit">
            +₹1,553 (+5.20%)
          </strong>
        </div>

      </div>

    </div>
  );
};

export default Summary;
