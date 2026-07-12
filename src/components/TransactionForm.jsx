import categories from "../data/categories";
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
    <form>
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
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={editingTransaction ? updateTransaction : addTransaction}
      >
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
