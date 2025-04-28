import { useState } from "react";
import BookList from "./components/BookList";
import { Books } from "./utils/mockData";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setfilteredBooks] = useState(Books);

  function handleSearch() {
    console.log(searchText);
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("filtered Books: ", filterBooks);
    setfilteredBooks(filterBooks);
  }

  return (
    <>
      <h1 className="heading">Book Management Application</h1>
      <div className="search">
        <h3>Search Books</h3>
        <input
          type="text"
          name=""
          id=""
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <BookList booksData={filteredBooks} />
      {/* <BookList booksData={Books} /> */}
    </>
  );
}

export default App;
