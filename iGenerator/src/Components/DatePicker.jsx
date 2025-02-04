const DatePicker = ({date, setDate, dueDate, setDueDate}) => {
    return (
      <div className="flex justify-between items-center mb-6">
        <div>
          <label htmlFor="invoice-date" className="block text-sm font-medium text-blue-600">
            Invoice Date
          </label>
          <input
            type="date"
            id="invoice-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md p-2 w-full mt-1"
          />
        </div>
        <div>
          <label htmlFor="due-date" className="block text-sm font-medium text-blue-600">
            Due Date
          </label>
          <input
            type="date"
            id="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border rounded-md p-2 w-full mt-1"
          />
        </div>
      </div>
    );
  };
  
  export default DatePicker;
  