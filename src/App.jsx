import { useEffect, useState } from "react";
import "../src/style.css";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortedDropdown from "./components/SortedDropdown";

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Others");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [editingTransaction, setEditingTransaction] = useState(null);
  const normalizedSearch = search.trim().toLowerCase();

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function formatDescription(text) {
    const trimmed = text.trim();

    return trimmed.at(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  }

  function formatDate() {
    return `${new Date().toLocaleString("en-NG", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })}`;
  }

  function resetForm() {
    setDescription("");
    setAmount("");
    setCategory("Others");
  }

  function addTransaction() {
    if (description.trim() === "" || amount === "") return;
    const date = formatDate();
    const newTransaction = {
      id: Date.now(),
      date,
      description: formatDescription(description),
      amount: parseFloat(amount),
      category,
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    resetForm();
  }

  function deleteTransaction(id) {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  }

  function updateTransaction() {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) => {
        if (transaction.id === editingTransaction.id) {
          return {
            ...transaction,
            description: formatDescription(description),
            amount: parseFloat(amount),
            category,
          };
        }

        return transaction;
      }),
    );

    resetForm();
    setEditingTransaction(null);
  }

  function handleEdit(transaction) {
    setDescription(transaction.description);
    setAmount(transaction.amount.toString());
    setCategory(transaction.category);
    setEditingTransaction(transaction);
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "All" || transaction.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedDropdown = [...filteredTransactions];
  switch (sortBy) {
    case "Newest":
      sortedDropdown.sort((a, b) => b.id - a.id);
      break;
    case "Oldest":
      sortedDropdown.sort((a, b) => a.id - b.id);
      break;
    case "Highest":
      sortedDropdown.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
      break;
    case "Lowest":
      sortedDropdown.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount));
      break;
    case "A-Z":
      sortedDropdown.sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "Z-A":
      sortedDropdown.sort((a, b) => b.description.localeCompare(a.description));
      break;

    default:
      break;
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
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Summary transactions={transactions} />
        <SortedDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <TransactionList
          transactions={sortedDropdown}
          totalTransactions={transactions.length}
          deleteTransaction={deleteTransaction}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
}

export default App;
