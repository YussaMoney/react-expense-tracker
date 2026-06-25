export default function Summary({ transactions }) {
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    transaction.amount > 0
      ? (income += transaction.amount)
      : (expense += transaction.amount);
  });
  const balance = income + expense;

  return (
    <section className="summary">
      <div className="income card">
        Income <span>₦{income.toLocaleString()}</span>
      </div>
      <div className="expense card">
        Expense <span>₦{Math.abs(expense).toLocaleString()}</span>
      </div>
      <div className="balance card">
        Balance <span>₦{balance.toLocaleString()}</span>
      </div>
    </section>
  );
}
