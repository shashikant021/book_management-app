import { Link } from "react-router-dom";
import userContext from "../utils/useContext";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const data = useContext(userContext);
  // console.log("Header", data);
  return (
    <div className="header">
      <ul className="header-list">
        <Link to="/" className="header-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="header-link">
          <li>About</li>
        </Link>
        <Link to="/contact" className="header-link">
          <li>Contact</li>
        </Link>
        <Link to="/demo" className="header-link">
          <li>Demo</li>
        </Link>
      </ul>
      <div className="user">
        <p><FaUserCircle /> {data.loggedInUser} </p>
      </div>
    </div>
  );
}
export default Header;
