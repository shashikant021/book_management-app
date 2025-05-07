import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";
import { useContext } from "react";
import userContext from "../utils/useContext";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function BookDetails() {
  //useParams is a hook that returns an object of key/value pairs of URL parameters
  const params = useParams();
  const bookDetails = Books.filter((book) => book.id == params.id);
  // console.log(params);
  const data = useContext(userContext);
  const dispatch = useDispatch();

  function handleAddBook(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem() {
    dispatch(removeItem());
  }

  return (
    <>
      <h1 className="heading">{`Book Details for Book with id ${params.id}`}</h1>
      {/*1st way to get the details ///// Using filter to get the book details */}
      {/* <div className="book-view">
        <img
          className="book-details-image"
          src={bookDetails[0].coverImage}
          alt="Book Image"
          width="auto"
          height="auto"
        />
        <div className="book-content">
          <h2 className="book-details-title">{bookDetails[0].title}</h2>
          <div className="book-details-author-date">
            <sapn>Author: {bookDetails[0].author}</sapn>
            <sapn>PublishedDate: {bookDetails[0].publishedDate}</sapn>
            <sapn>Pages: {bookDetails[0].pages}</sapn>
          </div>
          <p className="book-details-desc">{bookDetails[0].description}</p>
        </div>
      </div> */}

      {/*2st way to get the details ///// Using map to iterate over bookDetails array */}
      {bookDetails.map((book) => {
        return (
          <>
            <div className="book-view">
              <img
                className="book-details-image"
                src={book.coverImage}
                alt="Book Image"
                width="auto"
                height="auto"
              />
              <div className="book-content">
                <h2 className="book-details-title">{book.title}</h2>
                <div className="book-details-author-date">
                  <sapn>Author: {book.author}</sapn>
                  <sapn>PublishedDate: {book.publishedDate}</sapn>
                  <sapn>Pages: {book.pages}</sapn>
                </div>
                <p className="book-details-desc">{book.description}</p>
                <div className="btn-button">
                  {" "}
                  <button
                    onClick={() => handleAddBook(book)}
                    className="cart-button"
                  >
                    Add to Cart
                  </button>
                  <button onClick={handleRemoveItem} className="cart-button">
                    Remove Item
                  </button>
                </div>
                <p className="user-book">User : ----{data.loggedInUser}----</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default BookDetails;
