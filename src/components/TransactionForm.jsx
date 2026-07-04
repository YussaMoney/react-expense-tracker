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
        <option value="Others">Others</option>
        <option value="Food">Food</option>
        <option value="Drink">Drink</option>
        <option value="Transport">Transport</option>
        <option value="Salary">Salary</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Entertainment">Entertainment</option>
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
