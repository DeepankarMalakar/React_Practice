const Preview = ({
    date,
    dueDate,
    billToName,
    billToEmail,
    billToAddress,
    billFromName,
    billFromEmail,
    billFromAddress,
    items,
    currency,
    subtotal,
    tax,
    discount,
    total,
    notes,
}) => {
    return (
        <div className="mt-10 border rounded-md p-6 shadow">
            <h3 className="text-lg font-semibold">Invoice Preview</h3>
            <p>
                <strong>Date:</strong> {date}
            </p>
            <p>
                <strong>Due-Date:</strong> {dueDate}
            </p>
            <p>{billToAddress}</p>
            <p>
                <strong>Bill From:</strong> {billFromName} ({billFromEmail})
            </p>
            <p>{billFromAddress}</p>
            <p>
                <strong>Items:</strong>
            </p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.qty} x {currency} {item.price.toFixed(2)} ={" "}
                        {currency} {(item.qty * item.price).toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>
                <strong>Subtotal:</strong> {currency} {subtotal.toFixed(2)}
            </p>
            <p>
                <strong>Tax:</strong> {currency} {tax.toFixed(2)}
            </p>
            <p>
                <strong>Discount:</strong> -{currency} {discount.toFixed(2)}
            </p>
            <p>
                <strong>Total:</strong> {currency} {total.toFixed(2)}
            </p>
            {notes && <p><strong>Message:</strong> {notes}</p>}
        </div>
    );
};

export default Preview;
