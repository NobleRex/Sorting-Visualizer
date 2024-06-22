import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations,
  getBubbleSortAnimations,
  getSelectionSortAnimations,
  getInsertionSortAnimations,
} from '../SortingAlgorithms/SortingAlgorithms.js';
import './SortingVisualizer.css';

// Animation speed in milliseconds
const ANIMATION_SPEED_MS = 5;

// Number of bars in the array
const NUMBER_OF_ARRAY_BARS = 250;

// Colors for the visualization
const PRIMARY_COLOR = '#282c34'; // Dark gray - default bar color
const SECONDARY_COLOR = '#66fcf1'; // Turquoise - used for special highlighting
const ANIMATION_COLOR = '#c5c6c7'; // Light gray - used during comparisons

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [], // Array to be sorted
    };
  }

  // Initialize the array when the component mounts
  componentDidMount() {
    this.resetArray();
  }

  // Generate a new random array
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730)); // Random height between 5 and 730
    }
    this.setState({ array });
  }

  // Merge Sort visualization
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  // Quick Sort visualization
  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx] ? arrayBars[barOneIdx].style : null;
        const barTwoStyle = arrayBars[barTwoIdx] ? arrayBars[barTwoIdx].style : null;
        if (barOneStyle && barTwoStyle) {
          const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
        const barOneStyle = arrayBars[barOneIdx] ? arrayBars[barOneIdx].style : null;
        const barTwoStyle = arrayBars[barTwoIdx] ? arrayBars[barTwoIdx].style : null;
        if (barOneStyle && barTwoStyle) {
          setTimeout(() => {
            barOneStyle.height = `${newHeightOne}px`;
            barTwoStyle.height = `${newHeightTwo}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  // Heap Sort visualization
  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (barOneStyle && barTwoStyle) {
          const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (barOneStyle && barTwoStyle) {
          setTimeout(() => {
            barOneStyle.height = `${newHeightOne}px`;
            barTwoStyle.height = `${newHeightTwo}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }


  // Bubble Sort visualization
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx] ? arrayBars[barOneIdx].style : null;
        const barTwoStyle = arrayBars[barTwoIdx] ? arrayBars[barTwoIdx].style : null;
        if (barOneStyle && barTwoStyle) {
          const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx] ? arrayBars[barOneIdx].style : null;
        if (barOneStyle) {
          setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  // Selection Sort visualization
  selectionSort() {
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (barOneStyle && barTwoStyle) {
          const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (barOneStyle && barTwoStyle) {
          setTimeout(() => {
            barOneStyle.height = `${newHeightOne}px`;
            barTwoStyle.height = `${newHeightTwo}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  // Insertion Sort visualization
  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        if (barOneStyle && barTwoStyle) {
          const color = i % 3 === 0 ? ANIMATION_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ANIMATION_SPEED_MS);
        }
      } else {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        if (barOneStyle) {
          setTimeout(() => {
            barOneStyle.height = `${newHeight}px`;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {/* Render array bars */}
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        {/* Render control buttons */}
        <div className="button-container">
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.quickSort()}>Quick Sort</button>
          <button onClick={() => this.heapSort()}>Heap Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        </div>
      </div>
    );
  }
}

// Helper function to generate random integers within a range
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}