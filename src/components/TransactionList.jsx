export default function TransactionList({ transactions, deleteTransaction }) {
  const date = new Date().toDateString();
  return (
    <section>
      <h2 className="history">Transaction History</h2>
      <ul className="transaction-list">
        {transactions.length === 0 ? (
          <p>No transaction yet!</p>
        ) : (
          transactions.map((transaction) => (
            <li
              className={`transaction-item ${
                transaction.amount > 0 ? "income" : "expense"
              }`}
            >
              <div className="transaction-description">
                {transaction.description}{" "}
                <span>
                  <i>{date}</i>
                </span>
              </div>

              <div className="amountWithDeletBtn">
                <div className="transaction-amount">
                  ₦{Math.abs(transaction.amount).toLocaleString()}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
