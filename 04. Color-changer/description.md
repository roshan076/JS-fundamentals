# Color Changer

This JavaScript code allows the user to change the background color of a webpage to a random dark color from a predefined array. The selected color is displayed as a hex code on the page, and the background color of the webpage changes accordingly.

## Features:
- **Dark Color Palette**: The code uses an array of dark color hex codes (`darkColorsArr`), which includes various shades of dark colors.
- **Random Color Selection**: When the button is clicked, a random color from the array is selected and applied as the background color of the page.
- **Hex Code Display**: The hex code of the current background color is displayed on the page next to the color change button.

### Main Functionalities:
- **`getRandomIndex()`**: A helper function that returns a random index within the bounds of the `darkColorsArr` array.
- **`changeBackgroundColor()`**: The function that changes the webpage's background color and updates the displayed hex code when the button is clicked.
- **Button Trigger**: The button (`btn`) is linked to the `changeBackgroundColor` function, triggering the color change each time it's clicked.

## Usage:
Click the button to see the background color change to a random dark shade, and the corresponding hex code will be displayed on the screen.
