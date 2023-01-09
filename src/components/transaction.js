import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  const date = new Date(transaction.date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date);

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>
        <Link
          className="tranName"
          to={`/transactions/${index}`}
          style={{ fontWeight: "bold" }}
        >
          {transaction.item_name}
        </Link>
      </td>
      <td>
        {transaction.amount}
        {/* {transaction.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
      </td>
    </tr>
  );
}
