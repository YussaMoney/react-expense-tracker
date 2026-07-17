import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
// import categoryIcons from "../data/categoryIcons";
import { transactionVariants, listVariants } from "../data/variantsMotion";
import categories from "../data/categories";
export default function TransactionList({
  transactions,
  deleteTransaction,
  handleEdit,
  totalTransactions,
}) {
  return (
    <section>
      <h2 className="history">Transaction History</h2>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="transaction-list"
      >
        {totalTransactions === 0 ? (
          <p>
            📄 <br />
            <br />
            No transactions yet!.
            <br />
            <br /> Start by adding your first transaction.
          </p>
        ) : transactions.length === 0 ? (
          <p>
            🔍 <br />
            <br />
            No transactions found.
            <br />
            <br />
            Try another search term.
          </p>
        ) : (
          <AnimatePresence>
            {transactions.map((transaction) => (
              <motion.li
                layout
                variants={transactionVariants}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: 30 }}
                key={transaction.id}
                className={`transaction-item ${
                  transaction.amount > 0 ? "income" : "expense"
                }`}
              >
                <div className="categoryWithDesc">
                  <div
                    className={`transaction-category ${transaction.amount > 0 ? "trend-up" : "trend-down"}`}
                  >
                    {categories.map((category) =>
                      category.title === transaction.category
                        ? category.icon
                        : null,
                    )}
                    {/* {categoryIcons[transaction.category]} */}
                  </div>
                  <div className="transaction-description">
                    <div className="description-title">
                      {transaction.description}
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
                      const confirmed = window.confirm(
                        "Are you sure you want to delete this transaction?",
                      );
                      if (confirmed) deleteTransaction(transaction.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        )}
      </motion.ul>
    </section>
  );
}
