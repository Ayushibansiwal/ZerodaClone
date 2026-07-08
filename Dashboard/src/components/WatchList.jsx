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
import { DoughnutChart } from "./DoughnutChart";

const labels  = watchlist.map((subArray)=> subArray["name"]);

const WatchList = () => {
 const data = {
  labels,
  datasets: [
    {
      label: "price",
      data:watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
 }
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

      <DoughnutChart data={data}/>
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
          onClick={() => 
          generalContext.openBuyWindow(stock)}
        >
          Buy
        </button>
      </Tooltip>

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