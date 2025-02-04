import { useState } from "react";
import DatePicker from "./DatePicker";
import Billing from "./Billing";
import Items from "./Items";
import Summary from "./Summary";
import Notes from "./Notes";
import Preview from "./Preview";
import jsPDF from "jspdf";

const Form = () => {
    const [items, setItems] = useState([{ name: "", description: "", qty: 1, price: 0 }]);
    const [currency, setCurrency] = useState("USD");
    const [taxRate, setTaxRate] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);
    const [date, setDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [billToName, setBillToName] = useState("");
    const [billToEmail, setBillToEmail] = useState("");
    const [billToAddress, setBillToAddress] = useState("");
    const [billFromName, setBillFromName] = useState("");
    const [billFromEmail, setBillFromEmail] = useState("");
    const [billFromAddress, setBillFromAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [preview, setPreview] = useState(false);

    const calculateSubtotal = () => items.reduce((total, item) => total + item.qty * item.price, 0);
    const calculateTax = (subtotal) => (subtotal * taxRate) / 100;
    const calculateDiscount = (subtotal) => (subtotal * discountRate) / 100;
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax(subtotal);
        const discount = calculateDiscount(subtotal);
        return subtotal + tax - discount;
    };

    const handleDownloadPdf = () => {
        const pdf = new jsPDF();

        // Title
        pdf.setFontSize(20);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 102, 204); // Blue text
        pdf.text("Invoice", 105, 20, { align: "center" });

        // Date
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0); // Black text
        const pageWidth = pdf.internal.pageSize.getWidth(); // Get the page width

        // Position Date on the left
        pdf.text(`Date: ${date}`, 10, 30);

        // Set text color to red for Due-Date
        pdf.setTextColor(255, 0, 0); // RGB value for red

        // Position Due-Date on the right
        pdf.text(`Due-Date: ${dueDate}`, pageWidth - 10 - pdf.getTextWidth(`Due-Date: ${dueDate}`), 30);

        // Reset text color to black for other texts
        pdf.setTextColor(0, 0, 0);



        // Bill To Section
        pdf.setFillColor(240, 240, 240); // Light gray background
        pdf.rect(10, 40, 90, 30, "F"); // Rectangle for "Bill To" (increased height to 30)
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        pdf.text("Bill To", 15, 50);

        pdf.setFont("helvetica", "normal");
        pdf.text(`Name: ${billToName}`, 15, 55);
        pdf.text(`Address: ${billToAddress}`, 15, 60);
        pdf.text(`Email: ${billToEmail}`, 15, 65);

        // Bill From Section
        pdf.setFillColor(240, 240, 240); // Light gray background
        pdf.rect(110, 40, 90, 30, "F"); // Rectangle for "Bill From" (increased height to 30)
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 0, 0);
        pdf.text("Bill From", 115, 50);

        pdf.setFont("helvetica", "normal");
        pdf.text(`Name: ${billFromName}`, 115, 55);
        pdf.text(`Address: ${billFromAddress}`, 115, 60);
        pdf.text(`Email: ${billFromEmail}`, 115, 65);



        // Items Section
        pdf.setFillColor(240, 240, 240);
        pdf.setFontSize(14);
        pdf.setFont("helvetica", "bold");
        pdf.text("Items", 10, 80);
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");

        let y = 90;
        items.forEach((item, index) => {
            pdf.setTextColor(0, 102, 204);
            pdf.text(`${index + 1}. ${item.name}`, 10, y);
            pdf.text(`Qty: ${item.qty}`, 70, y);
            pdf.text(`Price: ${currency} ${item.price.toFixed(2)}`, 100, y);
            pdf.text(`Total: ${currency} ${(item.qty * item.price).toFixed(2)}`, 150, y);
            y += 10;
        });

        // Summary Section
        const subtotal = calculateSubtotal();
        const tax = calculateTax(subtotal);
        const discount = calculateDiscount(subtotal);
        const total = calculateTotal();

        y += 10;
        pdf.setFont("helvetica", "bold");
        pdf.text(`Subtotal: ${currency} ${subtotal.toFixed(2)}`, 10, y);
        pdf.text(`Tax (${taxRate}%): ${currency} ${tax.toFixed(2)}`, 10, y + 10);
        pdf.text(`Discount (${discountRate}%): -${currency} ${discount.toFixed(2)}`, 10, y + 20);
        pdf.setTextColor(0, 128, 0); // Green for total
        pdf.text(`Total: ${currency} ${total.toFixed(2)}`, 10, y + 30);

        // Save PDF
        pdf.save("invoice.pdf");
    };


    return (
        <div className="bg-white max-w-screen-lg mx-auto p-6 mt-10 rounded-lg shadow-md">
            <form onSubmit={(e) => e.preventDefault()}>
                <DatePicker date={date} setDate={setDate} dueDate={dueDate} setDueDate={setDueDate} />
                <Billing
                    billToName={billToName}
                    setBillToName={setBillToName}
                    billToEmail={billToEmail}
                    setBillToEmail={setBillToEmail}
                    billToAddress={billToAddress}
                    setBillToAddress={setBillToAddress}
                    billFromName={billFromName}
                    setBillFromName={setBillFromName}
                    billFromEmail={billFromEmail}
                    setBillFromEmail={setBillFromEmail}
                    billFromAddress={billFromAddress}
                    setBillFromAddress={setBillFromAddress}
                />
                <Items items={items} setItems={setItems} />
                <Summary
                    currency={currency}
                    setCurrency={setCurrency}
                    taxRate={taxRate}
                    setTaxRate={setTaxRate}
                    discountRate={discountRate}
                    setDiscountRate={setDiscountRate}
                    subtotal={calculateSubtotal()}
                    total={calculateTotal()}
                    tax={calculateTax(calculateSubtotal())}
                    discount={calculateDiscount(calculateSubtotal())}
                />
                <Notes notes={notes} setNotes={setNotes} />
                <div className="flex justify-between">
                    <button
                        type="button"
                        className="py-1 px-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 sm:py-2 sm:px-4 md:py-3 md:px-6"
                        onClick={() => setPreview(!preview)}
                    >
                        {preview ? "Hide Preview" : "Preview Invoice"}
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 cursor-pointer bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 sm:py-2 sm:px-4 md:py-3 md:px-6"
                        onClick={handleDownloadPdf}
                    >
                        Download Invoice
                    </button>


                </div>
                {preview && (
                    <Preview
                        date={date}
                        dueDate={dueDate}
                        billToName={billToName}
                        billToEmail={billToEmail}
                        billToAddress={billToAddress}
                        billFromName={billFromName}
                        billFromEmail={billFromEmail}
                        billFromAddress={billFromAddress}
                        items={items}
                        currency={currency}
                        subtotal={calculateSubtotal()}
                        tax={calculateTax(calculateSubtotal())}
                        discount={calculateDiscount(calculateSubtotal())}
                        total={calculateTotal()}
                        notes={notes}
                    />
                )}
            </form>
        </div>
    );
};

export default Form;
