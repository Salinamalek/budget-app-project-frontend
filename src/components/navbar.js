import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1848/1848966.png"
          alt="icon"
        />
        <h1 className="navbar">
          <Link to="/">Budget App</Link>
        </h1>
      </div>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
