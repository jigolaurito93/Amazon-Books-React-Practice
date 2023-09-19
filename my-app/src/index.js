import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <h1 className="someValue">hello</h1>
      <Person />
    </>
  );
}

const Person = () => (
  <div>
    <h2>Im Jigoo</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
