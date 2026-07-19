import { motion, AnimatePresence } from "framer-motion";
import { listVariants, transactionVariants } from "../../data/variantsMotion";
import TransactionItem from "./TransactionItem";
export default function TransactionList({
  transactions,
  deleteTransaction,
  handleEdit,
  totalTransactions,
}) {
  return (
    <section className="box">
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
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                handleEdit={handleEdit}
                deleteTransaction={deleteTransaction}
                transactionVariants={transactionVariants}
              />
            ))}
          </AnimatePresence>
        )}
      </motion.ul>
    </section>
  );
}
