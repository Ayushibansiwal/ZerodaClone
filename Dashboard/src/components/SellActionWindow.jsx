import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"; 

import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ stock }) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  if (!stock) return null;
  const totalStock = stock.qty;

  const handleSellClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) return;
    if (stockQuantity > totalStock) {
      toast.error(`You don't own enough shares!`);
      return;
    }

    try {
      await axios.post(`${baseUrl}/api/sellOrder`, {
        name: stock.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      }, { withCredentials: true });

      generalContext.closeWindow();
      
      // 2. Fire sell confirmation notice
      toast.success(`Sell order complete: ${stockQuantity} shares of ${stock.name}!`);

      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (err) {
      console.error(err);
      toast.error("Failed to execute sell order.");
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              max={totalStock}
              value={stockQuantity}
              onChange={(e) => {
                const enteredValue = Number(e.target.value);
                if (enteredValue > totalStock) {
                  setStockQuantity(totalStock);
                } else {
                  setStockQuantity(enteredValue);
                }
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Available Shares: <strong>{totalStock}</strong></span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>Sell</Link>
          <Link className="btn btn-grey" onClick={generalContext.closeWindow}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
