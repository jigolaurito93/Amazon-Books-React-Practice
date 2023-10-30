import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    img: "https://m.media-amazon.com/images/I/51HSkTKlauL._SY445_SX342_.jpg",
    id: 1,
},
{
  author: "Abraham Verghese",
  title: "The Covenant of Water",
  img: "https://m.media-amazon.com/images/I/518+jXvFO6L._SY445_SX342_.jpg",
  id: 2,
}

]

const img = "https://m.media-amazon.com/images/I/51HSkTKlauL._SY445_SX342_.jpg";
const title = "Harry Potter and the Sorcerer's Stone"
const author = "J.K. Rowling"


const handleBtn = () => {
    alert('click me')
  }



const BookList = () => {
  return(
  <section className="booklist">
   {books.map((book)=>{
    const {img, title, author, id} = book
    return (
      <Book title={title} img={img} author={author} key={id}>
        <button onClick={handleBtn}>Click Me</button>
      </Book>
     )}
   )}
  </section>
  )
   };

 

const Book = ({ img, title, author, children }) => (
  <article className="book">
    <img src={img} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    {children}
  </article>
);

const Img = () => <img src={img} />;
const Title = () => <h2>{title}</h2>;

const Author = () => {
  const inlineHeadingStyle = {
    color: "blue",
    fontSize: "0.75",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyle}>{author}</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
