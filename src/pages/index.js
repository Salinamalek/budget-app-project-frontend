import Transactions from "../components/transactions";

export default function Index() {
  return (
    <div className="Index">
      <h1>All Transactions</h1>
      <div className="transactions">
        <Transactions />
      </div>
    </div>
  );
}
