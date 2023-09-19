import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => (
  <article className="book">
    <Img />
    <Title />
    <Author />
  </article>
);

const Img = () => (
  <img
    src="https://m.media-amazon.com/images/I/51HSkTKlauL._SY445_SX342_.jpg"
    alt="Harry Potter 1 Book"
  />
);
const Title = () => <h2>Harry Potter and the Sorcerer's Stone</h2>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75", marginTop: "0.5rem" }}>
    J.K. Rowling
  </h4>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
