# Date Formatter

This JavaScript code dynamically displays the **current date** and allows users to format it based on their selection.

## How It Works
1. **Current Date Display**: 
   - The script retrieves the current **day, month, year, hours, and minutes** using JavaScript's `Date` object.
   - The default format (`DD-MM-YYYY`) is displayed in a paragraph element.

2. **Dropdown Selection**:
   - A `select` element (`date-options`) allows users to choose different date formats.

3. **Event Listener for Format Change**:
   - When a user selects an option, the displayed date format updates accordingly:
     - **"yyyy-mm-dd"** → Displays the date in `YYYY-MM-DD` format.
     - **"mm-dd-yyyy-h-mm"** → Displays the date in `MM-DD-YYYY H Hours M Minutes` format.
     - **Default** → Displays the date in `DD-MM-YYYY` format.

## Functions
- The script extracts the current date using `new Date()`.
- The `switch` statement handles different formatting options based on user selection.

This implementation provides a simple and interactive way to format and display dates dynamically.
