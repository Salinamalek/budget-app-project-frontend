import { useState, useEffect } from "react";
import Transaction from "./transaction";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  //   console.log(API);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="tActions">
        <table>
          <thead>
            <tr className="tableTitle">
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
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
