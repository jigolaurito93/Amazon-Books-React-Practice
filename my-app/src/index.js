import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => (
  <section>
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => (
  <article>
    <Img />
    <Title />
    <Author />
  </article>
);

const Img = () => (
  <img
    src="https://m.media-amazon.com/images/I/71HbYElfY0L._SL1500_.jpg"
    alt="Harry Potter 1 Book"
  />
);
const Title = () => <h2>Harry Potter and the Sorcerer's Stone</h2>;
const Author = () => <h4>J.K. Rowling</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
