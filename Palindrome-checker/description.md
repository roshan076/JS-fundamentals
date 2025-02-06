# Palindrome Checker

This JavaScript code implements a **Palindrome Checker** that verifies whether a given input is a palindrome.

## How It Works
1. **User Input**: The user enters a text into an input field.
2. **Button Click**: When the "Check" button is clicked, the `checkPalindrome` function is executed.
3. **Text Cleaning**: The input is processed by removing non-alphanumeric characters and converting it to lowercase.
4. **Palindrome Check**: The cleaned text is compared with its reversed version.
5. **Result Display**: 
   - If the text is a palindrome, a green message is displayed.
   - If not, a red message is shown.
6. **Validation**: If no input is provided, an alert prompts the user to enter a value.

## Functions
- `cleanText(text)`: Cleans the input by removing special characters and converting it to lowercase.
- `checkPalindrome()`: Checks if the input text is a palindrome and updates the result accordingly.

## Event Listener
- The `check-btn` button is assigned a click event that triggers the palindrome check.

This simple implementation ensures accurate detection of palindromes while handling edge cases.
