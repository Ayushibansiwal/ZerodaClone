import React ,{useState,useEffect} from "react";
import { holdings } from "../data/data";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import axios from "axios";

const Holdings = () => {
  const [allHoldings,setAllHoldings] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/allHoldings")
    .then((res)=>{
      setAllHoldings(res.data);
    })
  },[]);
  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;
  const totalPercent = ((totalPnL / totalInvestment) * 100).toFixed(2);

  return (
    <div className="holdings-container">
      {/* Header */}

      <div className="holdings-header">
        <div>
          <h2>Holdings</h2>
          <p>{allHoldings.length} Stocks in your portfolio</p>
        </div>

        <button className="download-btn">
          Download Report
        </button>
      </div>

      {/* Summary */}

      <div className="holding-summary">

        <div className="summary-box">
          <h5>Investment</h5>
          <h3>₹{totalInvestment.toFixed(2)}</h3>
        </div>

        <div className="summary-box">
          <h5>Current Value</h5>
          <h3>₹{currentValue.toFixed(2)}</h3>
        </div>

        <div className="summary-box">
          <h5>Total P&L</h5>

          <h3 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL >= 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}

            ₹{Math.abs(totalPnL).toFixed(2)}
          </h3>

          <small
            className={totalPnL >= 0 ? "profit" : "loss"}
          >
            {totalPercent}%
          </small>
        </div>

      </div>

      {/* Table */}

      <div className="holdings-table">

        <table>

          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Net Change</th>
              <th>Day Change</th>
            </tr>
          </thead>

          <tbody>

            {allHoldings.map((stock, index) => {

              const investment = stock.avg * stock.qty;
              const current = stock.price * stock.qty;
              const pnl = current - investment;

              return (

                <tr key={index}>

                  <td>

                    <div className="stock-name">

                      <strong>{stock.name}</strong>

                      <small>
                        Equity
                      </small>

                    </div>

                  </td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg.toFixed(2)}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                  <td>₹{current.toFixed(2)}</td>

                  <td
                    className={
                      pnl >= 0
                        ? "profit"
                        : "loss"
                    }
                  >
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td
                    className={
                      pnl >= 0
                        ? "profit"
                        : "loss"
                    }
                  >
                    {stock.net}
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

export default Holdings;