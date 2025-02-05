# JavaScript Code - Inverted Pyramid Pattern

## Overview
This JavaScript code generates a pyramid-like pattern using asterisks (`*`). The pyramid consists of a specified number of rows, with each row containing a calculated number of characters (stars) and spaces. The code allows for both a regular and an inverted pattern, depending on the value of the `inverted` variable.

## Code Breakdown

### Variables
- `character`: The character used to build the pyramid (in this case, an asterisk `*`).
- `count`: The number of rows in the pyramid.
- `rows`: An array used to store the rows of the pyramid pattern.
- `inverted`: A boolean flag that controls whether the pyramid is inverted or not.

### Functions

#### `padRow(rowNumber, rowCount)`
This function takes two arguments:
- `rowNumber`: The current row number.
- `rowCount`: The total number of rows in the pyramid.

It returns a string representing a single row of the pyramid, which consists of:
- Leading spaces: `" ".repeat(rowCount - rowNumber)`
- The asterisks (`*`): `"*".repeat(2 * rowNumber - 1)`
- Trailing spaces: `" ".repeat(rowCount - rowNumber)`

This ensures that each row is properly padded with spaces on both sides, and the number of asterisks increases as the row number increases.

### Logic

1. **Building the Pyramid:**
   - The `for` loop iterates from 1 to `count` and calls the `padRow` function to create each row.
   - If the `inverted` flag is `false`, rows are pushed to the `rows` array, which adds them in regular order.
   - If the `inverted` flag is `true`, the rows are inserted at the beginning of the `rows` array using `unshift()`, effectively reversing the order of the rows (inverting the pyramid).

2. **Constructing the Final Result:**
   - The `result` variable is initialized as an empty string.
   - The `for` loop iterates over each row in the `rows` array and adds it to the `result` string, ensuring each row is separated by a newline (`\n`).

3. **Printing the Output:**
   - Finally, the `result` string (which contains the full pattern) is logged to the console.

## Key Features
- **Dynamic Row Calculation:** The number of asterisks in each row is dynamically calculated using the formula `2 * rowNumber - 1`.
- **Inverted Pattern:** The `inverted` flag determines whether the pyramid is built in a normal or inverted order.
- **Spacing for Alignment:** The padding of spaces ensures that the pyramid is properly aligned with each row having the same width.
