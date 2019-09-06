import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="newElement">
      <h1>Hello, world!</h1>
      <h2>I am doing great!</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
