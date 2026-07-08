import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import GeneralContext from "./GeneralContext";


const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(uid?.price || 0);
  const handleBuyClick = async () => {
    if (stockQuantity <= 0) {
      toast.error("Quantity must be greater than 0");
      return;
    }
    if (stockPrice <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }
    try {
       await axios.post("http://localhost:8000/api/newOrder", {
        name: uid.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      }, { withCredentials: true });

      generalContext.closeWindow();
      
      toast.success(`Order placed: ${stockQuantity} shares of ${uid}!`);
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
          <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
          <button className="btn btn-grey" onClick={generalContext.closeWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;