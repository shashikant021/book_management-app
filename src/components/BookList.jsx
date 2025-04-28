import Book from "./Book";
import './style.css'

function BookList(props) {
  //   console.log("hello", props);
  return (
    <div className="booklist">
      {props.booksData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
      {/* instead of calling one by one use map() method to call it all at once time.  */}
      {/* <Book bookDetails={props.booksData[0]} /> */}
      {/* <Book bookDetails={props.booksData[1]} /> */}
    </div>
  );
}
export default BookList;
