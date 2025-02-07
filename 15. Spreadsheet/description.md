# Spreadsheet

## Overview
This JavaScript program implements a simple spreadsheet system that allows users to input formulas into a grid of cells. It supports **basic arithmetic operations, statistical functions, and range-based calculations**.

## Features
- **Basic arithmetic**: `+, -, *, /`
- **Statistical functions**: `sum, average, median`
- **Filtering functions**: `even, firsttwo, lasttwo, nodupes`
- **Boolean checks**: `has2, someeven, everyeven`
- **Range functions**: `random, range`
- **Cell references**: Supports referencing other cells using labels like `A1, B2`
- **Range expansion**: Allows formulas like `sum(A1:A5)`

## Key Functions
1. **`infixToFunction`** – Maps arithmetic operators to functions.
2. **`highPrecedence`** – Evaluates multiplication and division first.
3. **`spreadsheetFunctions`** – Defines available functions like `sum, median, even`.
4. **`applyFunction`** – Parses and applies spreadsheet functions to user input.
5. **`evalFormula`** – Expands and evaluates cell references and range-based formulas.
6. **`update`** – Handles input changes and updates computed values.

## How It Works
1. Users enter values or formulas (e.g., `=sum(A1:A3)`) into a **10-column, 99-row grid**.
2. The script processes formulas, resolving arithmetic operations, functions, and cell references.
3. The computed value is displayed in the corresponding cell.

## Usage
- Input numbers or formulas in the spreadsheet.
- Use `=sum(A1:A3)`, `=median(B1:B5)`, etc.
- Press **Enter** to compute and update values.

This project provides a lightweight, functional spreadsheet-like experience in JavaScript. 📊
