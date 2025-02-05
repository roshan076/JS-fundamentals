# Calorie Tracker Web Application

This JavaScript code enables a calorie tracking web application. Users can input calories for different meals (breakfast, lunch, dinner, snacks), track their exercise, and see if they are within their calorie budget or in surplus/deficit. It also includes a feature to dynamically add new input fields for each meal type.

## Key Features:
- **Dynamic Input Generation**: Users can dynamically add more entries for each meal type (e.g., Breakfast, Lunch, Dinner, Snacks) by clicking the "Add Entry" button.
- **Calorie Calculation**: Once all entries are filled out, the user can submit the form, which will calculate the total calories consumed, the calories burned through exercise, and the overall balance (whether they are within their calorie budget, or in surplus/deficit).
- **Error Handling**: The application validates input to ensure that the values entered are numeric and do not contain any invalid characters. If there’s an invalid input, an error message will alert the user.
- **Clear Form**: Users can reset the form, clearing all entries and the output display with the "Clear" button.

### Key Functions:
- **`cleanInputString()`**: Strips unwanted characters like spaces, signs, or non-numeric symbols from the input.
- **`isInvalidInput()`**: Checks if the input contains invalid scientific notation (e.g., `1e5`).
- **`addEntry()`**: Adds a new input field for a specific meal type (breakfast, lunch, dinner, snacks) when the "Add Entry" button is clicked.
- **`calculateCalories()`**: Handles the calculation of total calories consumed, burned, and remaining after considering the budgeted calories. It checks for errors and updates the output dynamically.
- **`getCaloriesFromInputs()`**: Loops through the input fields and sums up the values entered for each type of food or exercise.
- **`clearForm()`**: Resets the form, removing all entries and hiding the output.

## Usage:
1. **Add Entries**: Click the "Add Entry" button to add more inputs for each meal or snack.
2. **Calculate Calories**: Fill in the calorie inputs for each meal and click the submit button to see your calorie balance and whether you have a surplus or deficit.
3. **Clear Form**: Use the "Clear" button to reset the form and remove all entries.

## Error Handling:
- The app ensures that inputs are valid, and if an invalid input is detected (like non-numeric characters or scientific notation), the user is alerted, and the calculation stops.

