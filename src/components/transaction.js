import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${index}`}>
          {transaction.item_name.charAt(0).toUpperCase() +
            transaction.item_name.slice(1)}
        </Link>
      </td>
      <td>{transaction.amount}</td>
    </tr>
  );
}
