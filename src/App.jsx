import { useEffect, useState } from "react";
import "../src/style.css";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Others");
  const [search, setSearch] = useState("");
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
      description: `${description.trim().at(0).toUpperCase()}${description.trim().slice(1).toLowerCase()}`,
      amount: parseFloat(amount),
      category: category,
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    console.log(transactions);
    setDescription("");
    setAmount("");
    setCategory("Others");
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
            description: `${description.trim().at(0).toUpperCase()}${description.trim().slice(1).toLowerCase()}`,
            amount: parseFloat(amount),
            category: category,
          };
        }

        return transaction;
      }),
    );

    setDescription("");
    setAmount("");
    setCategory("Others");
    setEditingTransaction(null);
  }

  function handleEdit(transaction) {
    setDescription(transaction.description);
    setAmount(transaction.amount.toString());
    setCategory(transaction.category);
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
          category={category}
          setCategory={setCategory}
          editingTransaction={editingTransaction}
          updateTransaction={updateTransaction}
        />
        <SearchBar search={search} setSearch={setSearch} />
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
