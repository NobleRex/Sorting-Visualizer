# Sorting Visualizer

This project is a React-based web application that visualizes various sorting algorithms. It provides an interactive way to understand how different sorting algorithms work by animating the sorting process on a set of randomly generated bars.

## Features

- Visualize 6 different sorting algorithms:
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
- Generate new random arrays
- Adjust the size of the array and sorting speed

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3

## File Structure

- `SortingVisualizer.jsx`: Main component that renders the sorting visualization
- `SortingAlgorithms.js`: Contains implementations of all sorting algorithms
- `SortingVisualizer.css`: Styles for the visualization component

## How It Works

1. The application generates a random array of integers, represented as vertical bars.
2. Users can select a sorting algorithm to visualize.
3. The chosen algorithm sorts the array, with each comparison and swap animated on the screen.
4. The animation uses color changes to highlight the elements being compared or swapped.

## Sorting Algorithms

### Merge Sort
- Divide and conquer algorithm
- Time Complexity: O(n log n)

### Quick Sort
- Divide and conquer algorithm
- Time Complexity: Average O(n log n), Worst O(n^2)

### Heap Sort
- Comparison-based sorting algorithm
- Time Complexity: O(n log n)

### Bubble Sort
- Simple comparison-based algorithm
- Time Complexity: O(n^2)

### Selection Sort
- In-place comparison sorting algorithm
- Time Complexity: O(n^2)

### Insertion Sort
- Simple sorting algorithm
- Time Complexity: Average and Worst O(n^2), Best O(n)

## Setup and Running

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: npm install
4. Start the development server: npm start
5. Open your browser and visit `http://localhost:3000`

## Usage

- Click "Generate New Array" to create a new set of bars
- Select a sorting algorithm button to start the visualization
- Watch the animation as the bars are sorted

## Customization

You can adjust the following parameters in `SortingVisualizer.jsx`:
- `ANIMATION_SPEED_MS`: Change the speed of the animation
- `NUMBER_OF_ARRAY_BARS`: Modify the number of bars (array size)

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.
