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
    <section>
      <div className="income">Income: ₦{income.toLocaleString()}</div>
      <div className="expense">
        Expense: ₦{Math.abs(expense).toLocaleString()}
      </div>
      <div className="balance">Balance: ₦{balance.toLocaleString()}</div>
    </section>
  );
}
