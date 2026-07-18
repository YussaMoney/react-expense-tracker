import { ReceiptText, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import StatCard from "./StatCard";

export default function DashboardStats({ transactions }) {
  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    transaction.amount > 0
      ? (income += transaction.amount)
      : (expense += transaction.amount);
  });
  let balance = income + expense;

  return (
    <section className="dashboard-stats box">
      <StatCard
        title="Income"
        icon={<TrendingUp className="icon trend-up" />}
        value={`₦${Math.abs(income).toLocaleString()}`}
        variant="income"
      />

      <StatCard
        title="Expense"
        icon={<TrendingDown className="icon trend-down" />}
        value={`₦${Math.abs(expense).toLocaleString()}`}
        variant="expense"
      />

      <StatCard
        title="Balance"
        icon={
          <Wallet
            className={`icon ${balance === 0 ? "wallet" : balance > 0 ? "trend-up" : "trend-down"}`}
          />
        }
        value={`₦${Math.abs(balance).toLocaleString()}`}
        variant={`${balance === 0 ? "balance" : balance > 0 ? "income" : "expense"}`}
      />

      <StatCard
        title="Transactions"
        icon={<ReceiptText className="icon receipt-text" />}
        value={transactions.length}
        variant="total-transaction"
      />
    </section>
  );
}
