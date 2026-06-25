export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <section>
      <h2 className="history">Transaction History</h2>
      <ul className="transaction-list">
        {transactions.length === 0 ? (
          <p>No transaction yet</p>
        ) : (
          transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - ₦{transaction.amount}
              <button
                type="button"
                onClick={() => deleteTransaction(transaction.id)}
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
