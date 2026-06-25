export default function TransactionForm({
  description,
  amount,
  setDescription,
  setAmount,
  addTransaction,
}) {
  return (
    <form>
      <input
        type="text"
        name="desc"
        id="desc"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="button" onClick={addTransaction}>
        Add Transaction
      </button>
    </form>
  );
}
