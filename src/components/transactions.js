import { useState, useEffect } from "react";
import Transaction from "./transaction";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getSum = (sums) => {
    let sum = 0;
    for (let x of sums) {
      sum += Number(x.amount);
    }
    return sum.toFixed(2);
  };

  const total = getSum(transactions);

  function Colors() {
    if (total > 1000) {
      return (
        <h2>
          Account Total:{" "}
          <span style={{ color: "green" }}>
            ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </h2>
      );
    }
    if (total > 0 && total <= 1000) {
      return (
        <h2>
          Account Total:{" "}
          <span style={{ color: "rosybrown" }}>
            ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </h2>
      );
    }
    if (total < 0) {
      return (
        <h2>
          Account Total:{" "}
          <span style={{ color: "red" }}>
            ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </h2>
      );
    }
  }

  return (
    <div>
      {Colors()}
      <section className="tActions">
        <table>
          <thead>
            <tr className="tableTitle">
              <th>Date</th>
              <th>Name</th>
              <th>Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
