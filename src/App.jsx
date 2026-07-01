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
  const [editingTransaction, setEditingTransaction] = useState(null);

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

  function updateTransaction() {
    setTransactions(
      transactions.map((transaction) => {
        if (transaction.id === editingTransaction.id) {
          return {
            ...transaction,
            description: description.trim(),
            amount: parseFloat(amount),
          };
        }

        return transaction;
      }),
    );

    setDescription("");
    setAmount("");
    setEditingTransaction(null);
  }

  function handleEdit(transaction) {
    setDescription(transaction.description);
    setAmount(transaction.amount.toString());
    setEditingTransaction(transaction);
  }

  return (
    <div className="container">
      <header>
        <h1 className="heading">💰 Expense Tracker</h1>
        <h3 className="heading-footer">
          Manage your income and expenses effortlessly.
        </h3>
      </header>

      <main>
        <TransactionForm
          addTransaction={addTransaction}
          setDescription={setDescription}
          setAmount={setAmount}
          description={description}
          amount={amount}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        />
        <Summary transactions={transactions} />
        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;
