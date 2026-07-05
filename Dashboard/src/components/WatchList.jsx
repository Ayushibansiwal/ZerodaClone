import React, { useState } from "react";
import { watchlist } from "../data/data";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import { Tooltip, Grow } from "@mui/material";

const WatchList = () => {
  const [search, setSearch] = useState("");

  const filteredStocks = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="watchlist-container">
      {/* Search */}

      <div className="watchlist-search">
        <SearchIcon className="search-icon" />

        <input
          type="text"
          placeholder="Search eg. INFY, TCS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>{filteredStocks.length}/50</span>
      </div>

      {/* Stocks */}

      <div className="watchlist-items">
        {filteredStocks.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;

function WatchListItem({ stock }) {
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

      {/* Actions */}

      {showActions && <WatchActions />}
    </div>
  );
}

function WatchActions() {
  return (
    <div className="watch-actions">
      <Tooltip
        title="Buy"
        arrow
        TransitionComponent={Grow}
      >
        <button className="buy-btn">
          Buy
        </button>
      </Tooltip>

      <Tooltip
        title="Sell"
        arrow
        TransitionComponent={Grow}
      >
        <button className="sell-btn">
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics"
        arrow
        TransitionComponent={Grow}
      >
        <button className="icon-btn">
          <ShowChartOutlinedIcon />
        </button>
      </Tooltip>

      <Tooltip
        title="More"
        arrow
        TransitionComponent={Grow}
      >
        <button className="icon-btn">
          <MoreHorizOutlinedIcon />
        </button>
      </Tooltip>
    </div>
  );
}