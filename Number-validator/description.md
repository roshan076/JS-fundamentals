# Number Validator

This JavaScript code validates US phone numbers based on various formats and displays the result on the web page.

### Features:
- **Phone Number Formats Supported:**
  - With or without a country code (1)
  - With area code in parentheses (e.g., `(123)`) or without parentheses (e.g., `123`)
  - With optional separators such as space, dot, or dash (e.g., `123-456-7890`, `123.456.7890`, `123 456 7890`).

- **Main Functions:**
  1. **checkNumber:** Validates the phone number based on the regex pattern. It ensures the number follows the accepted formats and displays whether it is valid or invalid.
  2. **displayResult:** Displays the validation result in the output div, using green for valid numbers and red for invalid numbers.
  3. **clearOutput:** Clears the input and output when the user clicks the clear button.

### Usage:
1. **Input Field:** The user inputs the phone number in the text box.
2. **Check Button:** Click the "Check" button to validate the phone number.
3. **Clear Button:** Click the "Clear" button to reset the input and output.

### Code Explanation:
- **Regex Pattern Breakdown:** The code uses a regular expression to check the validity of the phone number. It supports different formats for the country code, area code, and number separators.
- **Event Listeners:** The script listens for clicks on the "Check" and "Clear" buttons and calls the respective functions.