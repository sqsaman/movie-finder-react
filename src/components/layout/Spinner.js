import React from "react";
//import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        //src={spinner}
        src={
          "https://i0.wp.com/codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif?fit=880%2C440&ssl=1"
        }
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
