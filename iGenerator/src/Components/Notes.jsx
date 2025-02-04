const Notes = ({ notes, setNotes }) => {
    return (
        <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-medium text-blue-600 mb-2">
                Message:
            </label>
            <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Thanks for your business!"
                className="w-full border rounded-md p-2"
            ></textarea>
        </div>
    );
};

export default Notes;
