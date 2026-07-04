import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function TransactionList({
  transactions,
  deleteTransaction,
  handleEdit,
}) {
  const categoryIcons = {
    Food: "🍔",
    Drink: "🍺",
    Transport: "🚌",
    Bills: "💡",
    Salary: "💼",
    Shopping: "🛍️",
    Health: "🏥",
    Entertainment: "🎮",
    Education: "📚",
    Others: "📦",
  };
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
              <div className="categoryWithDesc">
                <div
                  className={`transaction-category ${transaction.amount > 0 ? "trend-up" : "trend-down"}`}
                >
                  {categoryIcons[transaction.category]}
                </div>
                <div className="transaction-description">
                  <div className="description-title">
                    {transaction.description}{" "}
                  </div>
                  <div className="description-date">
                    <i>{transaction.date ? transaction.date : "No Date"}</i>
                  </div>
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
                  <FontAwesomeIcon />
                  <FontAwesomeIcon icon={faPen} size="xl" />
                </button>
                <button
                  title="Delete Transaction"
                  className="button delete-btn"
                  onClick={() => {
                    deleteTransaction(transaction.id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} size="xl" />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
