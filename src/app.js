import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 *      **Header**
 * -> Logo
 * -> Nav Items
 *      **Body**
 *
 *
 *      **Footer**
 * -> Copyrights etc
 *
 *
 *
 */
const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
