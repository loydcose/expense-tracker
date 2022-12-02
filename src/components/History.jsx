import moment from "moment"

const History = ({ list }) => {
  return (
    <div className="flex align-start text-slate-600 gap-4 ">
      <p
        className={`w-20 font-mono text-base font-medium ${
          list.isAdd ? "text-green-600" : "text-red-600"
        }`}
      >
        {list.isAdd ? "+" : "-"}
        {list.amount}
      </p>
      <div className="grow">
        <p className="text-sm md:text-base leading-3">{list.description}</p>
        <p className="text-sm md:text-base text-violet-600 font-medium mt-1 md:mt-0">
          {moment(new Date(list.createdAt)).fromNow()}
        </p>
      </div>
    </div>
  )
}

export default History
