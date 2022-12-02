import { useState, useEffect } from "react"
import Form from "./components/Form"
import History from "./components/History"

function App() {
  const [account, setAccount] = useState({ balance: 0, history: [] })
  const [display, setDisplay] = useState(true)
  const [formDisplays, setFormDisplays] = useState({
    title: "Add money",
    isAdd: true,
  })
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState("")
  useEffect(() => {
    let storage = localStorage.getItem("ExpenseTracker")
    if (!storage) {
      localStorage.setItem("ExpenseTracker", JSON.stringify({}))
      storage = localStorage.getItem("ExpenseTracker")
    }
    setAccount({ ...account, ...JSON.parse(storage) })
  }, [])
  const handleSubmit = () => {
    if (!formDisplays.isAdd) {
      if (account.balance - parseInt(amount) < 0) {
        alert("Not enough balance")
        return
      }
    }
    let balance = 0
    if (formDisplays.isAdd) {
      balance = account.balance + parseInt(amount)
    } else {
      balance = account.balance - parseInt(amount)
    }
    const obj = {
      amount: amount,
      isAdd: formDisplays.isAdd,
      description: description,
      createdAt: new Date(),
    }
    const newList = {
      ...account,
      balance: balance,
      history: [...account.history, obj],
    }
    setAccount(newList)
    localStorage.setItem("ExpenseTracker", JSON.stringify(newList))
    setAmount("")
    setDescription("")
    setDisplay(!display)
  }
  return (
    <main className="grid place-items-center bg-slate-200 min-h-screen py-16">
      <div className="bg-slate-50 p-8 rounded w-[90%] max-w-[400px]">
        <div className={display ? "block" : "hidden"}>
          <h1 className=" font-bold text-xl md:text-2xl tracking-tighter text-slate-600">
            Expense Tracker
          </h1>

          <p className="text-violet-600 text-sm md:text-base font-medium mt-6">
            Balance
          </p>
          <div className="flex align-center justify-between">
            <p className="font-bold text-3xl md:text-4xl font-mono text-slate-600">
              {account.balance}
            </p>
            <button
              type="button"
              onClick={() => {
                setDisplay(!display)
                setFormDisplays({
                  ...formDisplays,
                  title: "Add money",
                  isAdd: true,
                })
              }}
              className="rounded-full bg-violet-600 hover:bg-violet-700 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <hr className="mt-6" />
          <p className="text-violet-600 mt-6 text-sm font-medium md:text-base mb-2">
            History
          </p>
          <div className="grid gap-3">
            {account.history
              .map((list, index) => {
                return <History key={index} list={list} />
              })
              .reverse()}
          </div>
          <button
            type="button"
            onClick={() => {
              setDisplay(!display)
              setFormDisplays({
                ...formDisplays,
                title: "Add expense",
                isAdd: false,
              })
            }}
            className="rounded bg-violet-600 hover:bg-violet-700 font-medium text-slate-50 w-full text-sm md:text-base  p-3 md:p-4 mt-6"
          >
            Add Expense
          </button>
        </div>
        <div className={display ? "hidden" : "block"}>
          <Form
            formDisplays={formDisplays}
            amount={amount}
            setAmount={setAmount}
            description={description}
            setDescription={setDescription}
            display={display}
            setDisplay={setDisplay}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  )
}

export default App
