## Decimal to Binary (DB) Converter

This JavaScript code converts a decimal number to binary and includes a visual animation of the call stack. The animation demonstrates the recursive calls of the `decimalToBinary` function, which converts a decimal number into its binary representation.

### Features:
1. **Decimal to Binary Conversion**: Users can input a decimal number, and the program will convert it to binary.
2. **Call Stack Animation**: A visual animation simulates the recursive process of converting the number 5 into binary. The animation illustrates how the stack grows and shrinks during the conversion.
3. **User Input Validation**: The user is prompted to enter a valid decimal number (greater than or equal to 0).

### Components:
- **Input Field**: Allows the user to enter a decimal number for conversion.
- **Convert Button**: When clicked, the input is validated, and the conversion or animation is triggered.
- **Result Display**: Shows the resulting binary value after conversion.
- **Animation Container**: Displays the animation frames as the recursive steps unfold.
  
### Functions:
- `decimalToBinary`: A recursive function that converts a decimal number to binary.
- `showAnimation`: Displays the recursive call stack animation for the number 5.
- `checkUserInput`: Validates the user input and triggers the conversion or animation.

### Event Listeners:
- **Convert Button**: Initiates the conversion when clicked.
- **Enter Key**: Triggers the conversion when the Enter key is pressed in the input field.

### Alternate Method:
The alternate `decimalToBinary` method uses an iterative approach to convert the decimal number to binary.
