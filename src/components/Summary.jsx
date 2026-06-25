export default function Summary({ transactions }) {
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    transaction.amount > 0
      ? (income += transaction.amount)
      : (expense += transaction.amount);
  });
  let balance = income + expense;

  return (
    <section className="summary">
      <div className="income card">
        Income <span>₦{income.toLocaleString()}</span>
      </div>
      <div className="expense card">
        Expense <span>₦{Math.abs(expense).toLocaleString()}</span>
      </div>
      <div
        className={`card ${balance == 0 ? "balance" : balance > 0 ? "income" : "expense"}`}
      >
        Balance <span>₦{Math.abs(balance).toLocaleString()}</span>
      </div>
    </section>
  );
}
