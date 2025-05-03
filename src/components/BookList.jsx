import { Link } from "react-router-dom";
import Book from "./Book";
import "./style.css";

function BookList(props) {
  //   console.log("hello", props);

  return (
    <div className="booklist">
      {props.booksData.map((data) => (
        <Link to={`/book/${data.id}`} key={data.id} className="header-link">
          <Book bookDetails={data} />
        </Link>
      ))}
      {/* instead of calling one by one use map() method to call it all at once time.  */}
      {/* <Book bookDetails={props.booksData[0]} /> */}
      {/* <Book bookDetails={props.booksData[1]} /> */}
    </div>
  );
}
export default BookList;
