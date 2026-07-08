import React from "react";
import { positions } from "../data/data";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl}/api/allPositions`,{ withCredentials: true })
    .then((res)=>{
        setAllPositions(res.data);
    })
    .catch((err) => console.error("Failed to fetch holdings:", err));
  },[]);

  const invested = allPositions.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const current = allPositions.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const pnl = current - invested;

  return (
    <div className="positions-container">

      {/* Header */}

      <div className="positions-header">
        <div>
          <h2>Positions</h2>
          <p>{allPositions.length} Active Positions</p>
        </div>

        <button className="exit-all-btn">
          Exit All Positions
        </button>
      </div>

      {/* Cards */}

      <div className="position-cards">

        <div className="position-card">
          <h5>Investment</h5>
          <h2>₹{invested.toFixed(2)}</h2>
        </div>

        <div className="position-card">
          <h5>Current Value</h5>
          <h2>₹{current.toFixed(2)}</h2>
        </div>

        <div className="position-card">
          <h5>Total P&L</h5>

          <h2 className={pnl >= 0 ? "profit" : "loss"}>

            {pnl >= 0 ?
              <TrendingUpIcon /> :
              <TrendingDownIcon />
            }

            ₹{Math.abs(pnl).toFixed(2)}

          </h2>
        </div>

      </div>

      {/* Table */}

      <div className="positions-table">

        <table>

          <thead>

            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Today's Change</th>
            </tr>

          </thead>

          <tbody>

            {allPositions.map((stock, index) => {

              const investment =
                stock.avg * stock.qty;

              const current =
                stock.price * stock.qty;

              const profit =
                current - investment;

              return (

                <tr key={index}>

                  <td>

                    <span className="product-badge">
                      {stock.product}
                    </span>

                  </td>

                  <td>

                    <div className="instrument">

                      <strong>
                        {stock.name}
                      </strong>

                      <small>
                        NSE
                      </small>

                    </div>

                  </td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg.toFixed(2)}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                  <td
                    className={
                      profit >= 0
                        ? "profit"
                        : "loss"
                    }
                  >
                    ₹{profit.toFixed(2)}
                  </td>

                  <td
                    className={
                      stock.isLoss
                        ? "loss"
                        : "profit"
                    }
                  >
                    {stock.day}
                  </td>

                </tr>

              );

            })}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Positions;
