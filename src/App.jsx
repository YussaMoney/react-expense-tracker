import { useEffect, useState } from "react";
import "../src/style.css";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction() {
    if (description.trim() === "" || amount === "") return;
    const date = `${new Date().toLocaleString("en-NG", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })}`;
    const newTransaction = {
      id: Date.now(),
      date: date,
      description: description.trim(),
      amount: parseFloat(amount),
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    console.log(transactions);
    setDescription("");
    setAmount("");
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <header>
        <h1 className="heading">Expense Tracker</h1>
      </header>

      <main>
        <TransactionForm
          addTransaction={addTransaction}
          setDescription={setDescription}
          setAmount={setAmount}
          description={description}
          amount={amount}
        />
        <Summary transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </main>
    </div>
  );
}

export default App;
