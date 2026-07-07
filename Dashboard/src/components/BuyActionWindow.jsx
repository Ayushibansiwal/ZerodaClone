import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"; // 1. Import toast

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) return;

    try {
      await axios.post("http://localhost:8000/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      generalContext.closeWindow();
      
      // 2. Fire flash message with nice built-in checkmark animations
      toast.success(`Order placed: ${stockQuantity} shares of ${uid}!`);

      // 3. Give 1.5 seconds to read the notification before refreshing the charts/tables
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (err) {
      console.error(err);
      toast.error("Failed to place order.");
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setStockQuantity(val < 1 ? 1 : val);
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
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
          <Link className="btn btn-grey" onClick={generalContext.closeWindow}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;