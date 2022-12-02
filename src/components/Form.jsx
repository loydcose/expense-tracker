const Form = ({
  formDisplays,
  amount,
  setAmount,
  description,
  setDescription,
  display,
  setDisplay,
  handleSubmit,
}) => {
  return (
    <>
      <h1 className="font-bold text-slate-600 text-xl md:text-2xl tracking-tight ">
        Expense Tracker
      </h1>
      <p className="text-violet-600 mt-4 font-medium text-sm md:text-base mb-2">
        {formDisplays.title}
      </p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="block p-3 rounded w-full text-sm md:text-base bg-transparent border border-slate-400 text-slate-600"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description"
        className="w-full rounded mt-2 text-slate-600 text-sm md:text-base p-3 bg-transparent border border-slate-400"
      ></textarea>
      <div className="flex justify-end gap-4 mt-4">
        <button
          type="Cancel"
          onClick={() => setDisplay(!display)}
          className="text-violet-600 text-sm md:text-base hover:text-violet-700 font-medium"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="text-slate-50 text-sm md:text-base bg-violet-600 hover:bg-violet-700 py-3 px-5 rounded"
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default Form
