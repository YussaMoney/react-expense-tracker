export default function TransactionForm({
  description,
  amount,
  setDescription,
  setAmount,
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
      <button
        type="button"
        onClick={editingTransaction ? updateTransaction : addTransaction}
      >
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
