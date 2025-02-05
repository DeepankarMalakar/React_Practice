# React + Vite


Card Number: 4539 1488 0343 6467

# Issuer Identifier (IIN):
The first 6 digits 453914 identify the card network (in this case, Visa) and the issuing institution (the bank or financial institution).

# Account Number:
The digits from position 7 to 15 (after the first 6 digits) 880343646 represent the individual account number. This is the unique identifier for the cardholder's account at the issuing bank.

# Check Digit:
The last digit 7 is the check digit. It is calculated using the Luhn Algorithm and helps verify the validity of the card number.

# Luhn Algorithm (Check Digit Calculation):
The Luhn Algorithm is used to determine whether a card number is valid based on its digits.

# Steps for the Luhn Algorithm:

Starting from the rightmost digit (the check digit), double every other digit.
If doubling a number results in a value greater than 9, subtract 9 from it.
Sum all the digits (both the doubled and untouched ones).
If the total sum is divisible by 10, the card number is valid.
Example Calculation Using the Card Number 4539 1488 0343 6467:
Remove spaces: 4539148803436467

# Start from the rightmost digit, double every other digit: Here's how the digits transform:

* 7 (no change, it’s untouched)
* 6 * 2 = 12 → 12 is greater than 9, so we subtract 9 → 12 - 9 = 3, 
* 4 (no change, it’s untouched)
* 6 * 2 = 12 → 12 is greater than 9, so we subtract 9 → 12 - 9 = 3
* 3 (no change, it’s untouched)
* 0 * 2 = 0 (no change)
* 8 (no change, it’s untouched)
* 8 * 2 = 16 → 16 is greater than 9, so we subtract 9 → 16 - 9 = 7
* 4 (no change, it’s untouched)
* 1 * 2 = 2 (no change)
* 5 (no change, it’s untouched)
* 9 * 2 = 18 → 18 is greater than 9, so we subtract 9 → 18 - 9 = 9
* 3 (no change, it’s untouched)
* 4 * 2 = 8 (no change)

# Start from the rightmost digit, double every other digit:
7 6 4 6 3 0 8 8 4 1 5 9 3 4


# Subtract 9 from numbers greater than 9:
7 3 4 3 3 0 8 7 4 2 5 9 3 8

# Sum all the digits:
7 + 3 + 6 + 9 + 3 + 0 + 8 + 7 + 4 + 2 + 5 + 9 + 3 + 8 = 90

# If the sum is divisible by 10 (as it is here: 90 % 10 === 0), then the card number is valid.

Summary of the Card Number 4539 1488 0343 6467:
Issuer Identifier (IIN): 453914 (Visa and issuing institution)
Account Number: 880343646
Check Digit: 7 (calculated via the Luhn Algorithm)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
