import React, { useState, useEffect, useContext } from "react";
import { holdings } from "../data/data";
import GeneralContext from "./GeneralContext"; 
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import axios from "axios";
import { VerticalChart } from "./VerticalChart";
import { backgroundColor } from "@mui/system";

const Holdings = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [allHoldings, setAllHoldings] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);
  
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    axios.get(`${baseUrl}/api/allHoldings`, { withCredentials: true })
    .then((res) => setAllHoldings(res.data))
    .catch((err) => console.error("Failed to fetch holdings:", err));
  }, []);

  console.log(allHoldings);
  const totalInvestment = allHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
  const currentValue = allHoldings.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
  const totalPnL = currentValue - totalInvestment;
  const totalPercent = ((totalPnL / totalInvestment) * 100).toFixed(2);

  const labels = allHoldings.map((subArray)=> subArray["name"]);
  const data = {
    labels,
    datasets:[{
      label:"Stock Price",
      data:allHoldings.map((stock) => stock.price),
      backgroundColor: "rgba(255,99,132,0.5)"
    }]
  }

  return (
    <div className="holdings-container">
      <div className="holdings-header">
        <div>
          <h2>Holdings</h2>
          <p>{allHoldings.length} Stocks in your portfolio</p>
        </div>
        <button className="download-btn">Download Report</button>
      </div>

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
            {totalPnL >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            ₹{Math.abs(totalPnL).toFixed(2)}
          </h3>
          <small className={totalPnL >= 0 ? "profit" : "loss"}>{totalPercent}%</small>
        </div>
      </div>

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
                <tr
                  key={index}
                  onMouseEnter={() => setHoveredRow(index)} // Track hover entry
                  onMouseLeave={() => setHoveredRow(null)}  // Track hover exit
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <td>
                    <div className="stock-name">
                      <strong>{stock.name}</strong>
                      <small>Equity</small>
                    </div>
                    
                    {/* Floating action buttons when row is hovered */}
                    {hoveredRow === index && (
                      <div className="holdings-hover-actions" style={{ position: "absolute", right: "20px", background: "#fff", padding: "4px", borderRadius: "4px", boxShadow: "0 2px 5px rgba(0,0,0,0.15)" }}>
                        <button 
                          style={{ marginRight: "5px", backgroundColor: "#4caf50", color: "white", border: "none", padding: "3px 8px", borderRadius: "3px" }}
                          onClick={() => openBuyWindow(stock.name)}
                        >
                          Buy
                        </button>
                        <button 
                          style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "3px 8px", borderRadius: "3px" }}
                          onClick={() => openSellWindow(stock)} // Passes whole object for maximum safety validations
                        >
                          Sell
                        </button>
                      </div>
                    )}
                  </td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td>₹{current.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>₹{pnl.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>{stock.net}</td>
                  <td className={stock.isLoss ? "loss" : "profit"}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <VerticalChart data={data}/>
    </div>
  );
};

export default Holdings;
