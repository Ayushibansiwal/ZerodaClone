import React from "react";
import {
  AccountBalanceWallet,
  ArrowDownward,
  ArrowUpward,
  Savings,
} from "@mui/icons-material";

const Funds = () => {
  return (
    <div className="funds-container">

      {/* Header */}

      <div className="funds-header">
        <div>
          <h2>Funds</h2>
          <p>Manage your trading balance and account funds.</p>
        </div>

        <div className="fund-buttons">
          <button className="add-btn">
            <ArrowDownward />
            Add Funds
          </button>

          <button className="withdraw-btn">
            <ArrowUpward />
            Withdraw
          </button>
        </div>
      </div>

      {/* Balance Cards */}

      <div className="balance-grid">

        <div className="balance-card primary">

          <div className="balance-icon">
            <AccountBalanceWallet />
          </div>

          <h5>Available Margin</h5>

          <h2>₹4,043.10</h2>

          <small>Available for trading</small>

        </div>

        <div className="balance-card">

          <div className="balance-icon green">
            <Savings />
          </div>

          <h5>Used Margin</h5>

          <h2>₹3,757.30</h2>

          <small>Currently blocked</small>

        </div>

      </div>

      {/* Equity Section */}

      <div className="fund-details">

        <div className="details-header">
          <h3>Equity Account</h3>
        </div>

        <div className="detail-row">
          <span>Opening Balance</span>
          <strong>₹4,043.10</strong>
        </div>

        <div className="detail-row">
          <span>Pay In</span>
          <strong>₹4,064.00</strong>
        </div>

        <div className="detail-row">
          <span>Available Cash</span>
          <strong>₹4,043.10</strong>
        </div>

        <div className="detail-row">
          <span>SPAN Margin</span>
          <strong>₹0.00</strong>
        </div>

        <div className="detail-row">
          <span>Exposure Margin</span>
          <strong>₹0.00</strong>
        </div>

        <div className="detail-row">
          <span>Delivery Margin</span>
          <strong>₹0.00</strong>
        </div>

        <div className="detail-row">
          <span>Options Premium</span>
          <strong>₹0.00</strong>
        </div>

        <div className="detail-row">
          <span>Liquid Collateral</span>
          <strong>₹0.00</strong>
        </div>

        <div className="detail-row">
          <span>Equity Collateral</span>
          <strong>₹0.00</strong>
        </div>

      </div>

      {/* Commodity */}

      <div className="commodity-card">

        <h3>Commodity Account</h3>

        <p>
          You don't have a commodity account yet.
        </p>

        <button className="commodity-btn">
          Open Commodity Account
        </button>

      </div>

    </div>
  );
};

export default Funds;