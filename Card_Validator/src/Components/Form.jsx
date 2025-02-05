const Form = ({
    handleSubmission,
    error,
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    success,
    allFeilds
}) => {
    return (
        <div className="flex justify-center mt-20">
            <div className="max-w-md w-full bg-white border border-gray-400 shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center mb-4">Card Validator</h1>
                {error && <p className="text-red-500 font-semibold text-center mb-4">{error}</p>}
                {success && <p className="text-green-600 font-semibold text-center mb-4">{success}</p>}
                {allFeilds && <p className="text-green-600 font-semibold text-center mb-4">{allFeilds}</p>}
                <form className="space-y-4" onSubmit={handleSubmission}>
                    <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-1/2 p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="w-1/2 p-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Validate
                    </button>
                    <div className="flex justify-between">
                    <img src="/card.png" alt="card-logo" className="w-12 h-12" />
                    <img src="/credit-card (2).png" alt="card-logo" className="w-12 h-12" />
                    <img src="/visa (1).png" alt="card-logo" className="w-12 h-12" />
                    <img src="/american-express.png" alt="card-logo" className="w-12 h-12" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
