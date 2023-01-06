import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [editTransaction, setEditTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setEditTransaction({ ...editTransaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, editTransaction)
      .then((res) => {
        setEditTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setEditTransaction(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={editTransaction.date}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="item_name">Name: </label>
        <input
          id="item_name"
          type="text"
          value={editTransaction.item_name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          value={editTransaction.amount}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          value={editTransaction.from}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          value={editTransaction.category}
          onChange={handleTextChange}
          required
        />
        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
