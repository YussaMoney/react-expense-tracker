import { TrendingDown, TrendingUp, Wallet } from "lucide-react";

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
      <div className="cardbox income">
        <div className="icon-wrapper">
          <TrendingUp className="icon trend-up" />
        </div>
        <div className=" card">
          Income <span>₦{income.toLocaleString()}</span>
        </div>
      </div>
      <div className="cardbox expense">
        <div className="icon-wrapper">
          <TrendingDown className="icon trend-down" />
        </div>
        <div className=" card">
          Expense <span>₦{Math.abs(expense).toLocaleString()}</span>
        </div>
      </div>
      <div
        className={`cardbox ${balance == 0 ? "balance" : balance > 0 ? "income" : "expense"}`}
      >
        <div className="icon-wrapper">
          <Wallet
            className={`icon ${balance == 0 ? "wallet" : balance > 0 ? "trend-up" : "trend-down"}`}
          />
        </div>
        <div className="card">
          Balance <span>₦{Math.abs(balance).toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
}
