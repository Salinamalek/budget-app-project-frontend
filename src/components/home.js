import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Budget App!</h1>
      <img
        src="https://images.unsplash.com/photo-1625225233840-695456021cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="budget"
      ></img>
      <div className="view">
        <Link to="/transactions">
          <button className="viewTransactions">View Transactions</button>
        </Link>
      </div>
    </div>
  );
}
