import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { watchlist } from "../data/data";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { Tooltip, Grow } from "@mui/material";

import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <div className="watchlist-list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;

function WatchListItem({ stock, holding }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className="watch-item"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Left */}
      <div className="watch-left">
        <h4>{stock.name}</h4>

        <small className={stock.isDown ? "loss" : "profit"}>
          {stock.percent}

          {stock.isDown ? (
            <KeyboardArrowDownIcon fontSize="small" />
          ) : (
            <KeyboardArrowUpIcon fontSize="small" />
          )}
        </small>
      </div>

      {/* Right */}
      <div className="watch-right">
        <h3>{stock.price}</h3>
      </div>

      {showActions && (
        <WatchActions stock={stock} holding={holding} />
      )}
    </div>
  );
}

function WatchActions({ stock, holding }) {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="watch-actions">
      <Tooltip title="Buy" arrow TransitionComponent={Grow}>
        <button
          className="buy-btn"
          onClick={() => generalContext.openBuyWindow(stock.name)}
        >
          Buy
        </button>
      </Tooltip>

      {/* Sell button block has been completely removed from here */}

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="icon-btn">
          <ShowChartOutlinedIcon />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="icon-btn">
          <MoreHorizOutlinedIcon />
        </button>
      </Tooltip>
    </div>
  );
}