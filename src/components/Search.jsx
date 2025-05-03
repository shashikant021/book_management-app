import { useContext, useEffect, useState } from "react";
import BookList from "./BookList";
import { Books } from "../utils/mockData";
import userContext from "../utils/useContext";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setfilteredBooks] = useState(Books);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const response = await fetch("https://www.dbooks.org/api/recent");
  //   const data = await response.json();
  //   console.log("result", data);
  //   setfilteredBooks(data);
  // }

  function handleSearch() {
    console.log(searchText);
    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("filtered Books: ", filterBooks);
    setfilteredBooks(filterBooks);
  }

  const { setUserName } = useContext(userContext);

  return (
    <>
      <input
        type="text"
        placeholder="Dynamic user name..."
        onChange={(e) => setUserName(e.target.value)}
      />
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
export default Search;
