export default function TransactionList({
  transactions,
  deleteTransaction,
  handleEdit,
}) {
  return (
    <section>
      <h2 className="history">Transaction History</h2>
      <ul className="transaction-list">
        {transactions.length === 0 ? (
          <p>
            📄 <br />
            <br />
            No transactions yet!.
            <br />
            <br /> Start by adding your first transaction.
          </p>
        ) : (
          transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`transaction-item ${
                transaction.amount > 0 ? "income" : "expense"
              }`}
            >
              <div className="transaction-description">
                <div className="description-title">
                  {transaction.description}{" "}
                </div>
                <div className="description-date">
                  <i>{transaction.date ? transaction.date : "No Date"}</i>
                </div>
              </div>

              <div className="editBtnWithDeletBtn">
                <div className="transaction-amount">
                  ₦{Math.abs(transaction.amount).toLocaleString()}
                </div>
                <button
                  type="button"
                  className="button edit-btn"
                  title="Edit Transaction"
                  onClick={() => handleEdit(transaction)}
                >
                  ✏️
                </button>
                <button
                  title="Delete Transaction"
                  className="button delete-btn"
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
