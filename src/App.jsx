import { useEffect, useState } from "react";

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

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
    };
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    setDescription("");
    setAmount("");
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter((item) => item.id !== id));
  }

  let income = 0;
  let expense = 0;
  transactions.forEach((transaction) => {
    transaction.amount > 0
      ? (income += transaction.amount)
      : (expense += transaction.amount);
  });
  const balance = income + expense;

  return (
    <div className="container">
      <header>
        <h1 className="heading">Expense Tracker</h1>
      </header>

      <main>
        <label htmlFor="desc">
          Description:
          <input
            type="text"
            name="desc"
            id="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <button type="button" onClick={addTransaction}>
          Add Transaction
        </button>

        <section>
          <div className="income">Income: ₦{income}</div>
          <div className="expense">Expense: ₦{expense}</div>
          <div className="balance">Balance: ₦{balance}</div>
        </section>

        <section>
          <h2 className="history">Transaction History</h2>
          <ul className="transaction-list">
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.description} - {transaction.amount}
                <button
                  type="button"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
