import "./style.css";
function Book(props) {
  // console.log(props)
  return (
    <div className="book-card">
      <img
        className="book-image"
        src={props.bookDetails.coverImage}
        alt="BookInage"
        width="200px"
        height="200px"
      />
      <div className="book-details">
        <h2 className="book-title">{props.bookDetails.title}</h2>
        <div className="author-date">
          <p className="book-author">{props.bookDetails.author}</p>
          <p className="book-date">{props.bookDetails.publishedDate}</p>
        </div>
        <p className="book-description">{props.bookDetails.description}</p>
      </div>
    </div>
  );
}
export default Book;
