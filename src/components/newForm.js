import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function NewForm() {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/transactions`, newTransaction)
      .then((res) => {
        setNewTransaction(res.data);
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={newTransaction.date}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="item_name">Name: </label>
        <input
          id="item_name"
          type="text"
          value={newTransaction.item_name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          value={newTransaction.amount}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          value={newTransaction.from}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          value={newTransaction.category}
          onChange={handleTextChange}
          required
        />
        <div className="submitButton">
          <input type="submit" />
        </div>
      </form>
      <div className="backButton">
        <Link to={`/transactions`} style={{ textDecoration: "none" }}>
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
}
