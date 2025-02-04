const Summary = ({ currency, setCurrency, taxRate, setTaxRate, discountRate, setDiscountRate, subtotal, total, tax, discount }) => {
    // Currency symbol map
    const currencySymbols = {
        USD: "$",
        EUR: "€",
        INR: "₹"
    };

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 sm:space-x-10">
            <div className="space-y-3 sm:w-1/3">
                <label htmlFor="currency" className="block text-sm font-medium text-blue-600">
                    Currency:
                </label>
                <select
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="border rounded-md p-2 w-full"
                >
                    <option value="USD">USD (United States Dollar)</option>
                    <option value="EUR">EUR (Euro)</option>
                    <option value="INR">INR (Indian Rupee)</option>
                </select>

                <label htmlFor="tax-rate" className="block text-sm font-medium text-blue-600">
                    Tax rate (%):
                </label>
                <input
                    type="number"
                    id="tax-rate"
                    value={taxRate}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value || 0))}
                    className="border rounded-md p-2 w-full"
                />

                <label htmlFor="discount-rate" className="block text-sm font-medium text-blue-600">
                    Discount rate (%):
                </label>
                <input
                    type="number"
                    id="discount-rate"
                    value={discountRate}
                    onChange={(e) => setDiscountRate(parseFloat(e.target.value || 0))}
                    className="border rounded-md p-2 w-full"
                />
            </div>

            <div className="text-right sm:w-2/3 mt-6 sm:mt-0">
                <p className="font-semibold">
                    Subtotal: {currencySymbols[currency] || "$"}{subtotal.toFixed(2)}
                </p>
                <p className="font-semibold text-orange-400">Discount: -{currencySymbols[currency] || "$"}{discount.toFixed(2)}</p>
                <p className="font-semibold">Tax: +{currencySymbols[currency] || "$"}{tax.toFixed(2)}</p>
                <p className="font-bold text-lg text-green-600">Total: {currencySymbols[currency] || "$"}{total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Summary;
