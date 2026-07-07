import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (stock) => {},
  closeWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [windowType, setWindowType] = useState(null); 
  const [selectedStock, setSelectedStock] = useState(null);

  const handleOpenBuyWindow = (uid) => {
    setSelectedStock(uid); 
    setWindowType("BUY");
  };
  
  const handleOpenSellWindow = (stock) => {
    setSelectedStock(stock); 
    setWindowType("SELL");
  };

  const handleCloseWindow = () => {
    setWindowType(null);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeWindow: handleCloseWindow,
      }}
    >
      {props.children}
      
      {/* react-hot-toast global container layout */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {windowType === "BUY" && <BuyActionWindow uid={selectedStock} />}
      {windowType === "SELL" && <SellActionWindow stock={selectedStock} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;