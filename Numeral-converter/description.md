## Numeral Converter

This JavaScript code converts a decimal number (between 1 and 3999) into its Roman numeral representation. It ensures the user inputs a valid number and handles edge cases, such as numbers less than 1 or greater than 3999.

### Features:
1. **Decimal to Roman Conversion**: Converts a valid decimal number into its equivalent Roman numeral.
2. **Input Validation**: Ensures that the user inputs a valid number between 1 and 3999. Displays an appropriate message if the input is invalid.
3. **Interactive UI**: The user can enter a number, click a button, and immediately see the Roman numeral conversion.

### Components:
- **Input Field**: Accepts the decimal number to be converted.
- **Convert Button**: Initiates the conversion when clicked.
- **Output Display**: Shows the Roman numeral result or an error message if the input is invalid.

### Functions:
- `convertToRoman`: Converts the decimal number to its Roman numeral representation by iterating through a predefined array of Roman numerals.
- `validInput`: Validates the user input and displays the corresponding Roman numeral or an error message.

### Event Listeners:
- **Convert Button**: When clicked, it triggers the validation and conversion process.
