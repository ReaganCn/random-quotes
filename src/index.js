import React from "react";
import ReactDOM from "react-dom";

import "../public/styles.css";

import QuoteBox from "./components/QuoteBoxContainer"

const Main = (props) => {
  return (
    <div>
      <QuoteBox />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("quote-box"));
