import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Details() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  return (
    <article className="details">
      <div className="card">
        <h2>
          {transaction.item_name} - {transaction.amount}
        </h2>
        <h3>{transaction.date}</h3>
      </div>
      <br></br>

      <div className="buttons">
        <div>
          <Link to={"/transactions"}>
            <button className="button">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button className="button">Edit</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions`}>
            <button className="button" onClick={handleDelete}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
