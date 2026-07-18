import categories from "../data/categories";
import { motion } from "framer-motion";
export default function TransactionForm({
  description,
  amount,
  setDescription,
  setAmount,
  category,
  setCategory,
  addTransaction,
  editingTransaction,
  updateTransaction,
}) {
  return (
    <form
      className="form box"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Description"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Amount"
        value={amount}
        required
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.title} value={category.title}>
            {category.icon} {category.title}
          </option>
        ))}
      </select>

      <motion.button
        type="button"
        onClick={editingTransaction ? updateTransaction : addTransaction}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </motion.button>
    </form>
  );
}
