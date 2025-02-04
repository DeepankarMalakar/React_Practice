const Billing = ({
    billToName,
    setBillToName,
    billToAddress,
    setBillToAddress,
    billFromName,
    setBillFromName,
    billFromAddress,
    setBillFromAddress,
    billToEmail,
    setBillToEmail,
    billFromEmail,
    setBillFromEmail
}) => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-10 mb-6">
            {/* Bill To Section */}
            <div className="border border-gray-300 p-4 rounded-md flex-1">
                <h3 className="font-semibold text-lg mb-4 text-blue-600">Bill to</h3>
                <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Who is this invoice to?"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billToName}
                        onChange={(e) => setBillToName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Billing address"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billToAddress}
                        onChange={(e) => setBillToAddress(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billToEmail}
                        onChange={(e) => setBillToEmail(e.target.value)}
                    />
                </div>
            </div>

            {/* Bill From Section */}
            <div className="border border-gray-300 p-4 rounded-md flex-1">
                <h3 className="font-semibold text-lg mb-4 text-blue-600">Bill from</h3>
                <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Who is this invoice from?"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billFromName}
                        onChange={(e) => setBillFromName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Billing address"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billFromAddress}
                        onChange={(e) => setBillFromAddress(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-md p-2 outline-0"
                        value={billFromEmail}
                        onChange={(e) => setBillFromEmail(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Billing;
