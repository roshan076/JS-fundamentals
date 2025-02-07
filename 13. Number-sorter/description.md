# Number Sorter

## Overview
This JavaScript program sorts an array of numerical values selected from dropdown menus using different sorting algorithms. The sorted results are dynamically updated in the UI.

## Features
- Collects input values from dropdowns.
- Provides three sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort.
- Displays sorted values dynamically.
- Uses event handling for sorting on button click.

## Sorting Algorithms
1. **Bubble Sort**  
   - Repeatedly swaps adjacent elements if they are in the wrong order.
   - Runs in O(n²) time complexity.

2. **Selection Sort**  
   - Finds the smallest element and swaps it with the first unsorted element.
   - Runs in O(n²) time complexity.

3. **Insertion Sort**  
   - Builds a sorted list one element at a time.
   - Efficient for small datasets with O(n²) worst-case complexity.

## How It Works
1. **Event Handling**  
   - The "Sort" button listens for clicks and triggers sorting.
   - Extracts numerical values from dropdown menus.

2. **Sorting Logic**  
   - Values are sorted using `sort((a, b) => a - b)`.
   - The UI updates dynamically with sorted values.

3. **Output Update**  
   - The function `updateUI()` modifies the displayed values.

## Usage
1. Select numbers from the dropdown menus.
2. Click the "Sort" button.
3. The sorted numbers will be displayed.

This script provides a simple interactive sorting visualizer. 🚀
