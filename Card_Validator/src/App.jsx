import { useState } from "react";
import Form from "./Components/Form";

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");  // Success message state

  // Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    // Perform validations
    if (!validateCardNumber(cardNumber)) {
      setError("Invalid Card Number");
      return; // Stop further validation
    }

    if (!validateExpiryDate(expiryDate)) {
      setError("Invalid Expiry Date");
      return;
    }

    if (!validateCvv(cvv)) {
      setError("Invalid CVV");
      return;
    }

    setSuccess("Card is valid!"); // Set success message
  };

  // Validation function for card number
  const validateCardNumber = (number) => {
    const cleanedNumber = number.replace(/\s+/g, ""); // Remove spaces
    if (!/^[0-9]{13,19}$/.test(cleanedNumber)) return false;

    // Luhn Algorithm
    let sum = 0;
    let shouldDouble = false;

    for (let i = cleanedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedNumber[i], 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  // Validation function for expiry date
  const validateExpiryDate = (date) => {
    const [month, year] = date.split("/").map((val) => parseInt(val, 10));
    if (!month || !year || month < 1 || month > 12) return false;

    const currentDate = new Date();
    const currentYear = parseInt(currentDate.getFullYear().toString().slice(-2));
    const currentMonth = currentDate.getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };

  // Validation function for CVV
  const validateCvv = (cvv) => /^[0-9]{3,4}$/.test(cvv); // 3 or 4 digits

  // Format card number dynamically
  const formatCardNumber = (number) => {
    return number.replace(/\s+/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div>
      <Form
        handleSubmission={handleSubmission}
        error={error}
        cardNumber={cardNumber}
        setCardNumber={(value) => setCardNumber(formatCardNumber(value))}
        expiryDate={expiryDate}
        setExpiryDate={setExpiryDate}
        cvv={cvv}
        setCvv={setCvv}
        success={success}
      />
    </div>
  );
};

export default App;
