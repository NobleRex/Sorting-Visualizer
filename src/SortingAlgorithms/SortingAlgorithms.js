// Quick Sort
export function getQuickSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pivotIndex - 1, animations);
    quickSortHelper(arr, pivotIndex + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push([j, high]);
    animations.push([j, high]);
    if (arr[j] <= pivot) {
      i++;
      animations.push([i, arr[j], j, arr[i]]);
      swap(arr, i, j);
    } else {
      animations.push([j, arr[j], j, arr[j]]);
    }
  }
  animations.push([i + 1, arr[high], high, arr[i + 1]]);
  swap(arr, i + 1, high);
  return i + 1;
}

// Heap Sort
export function getHeapSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  const n = auxiliaryArray.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(auxiliaryArray, n, i, animations);

  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, auxiliaryArray[i], i, auxiliaryArray[0]]);
    swap(auxiliaryArray, 0, i);
    heapify(auxiliaryArray, i, 0, animations);
  }

  return animations;
}

function heapify(arr, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest])
    largest = left;

  if (right < n && arr[right] > arr[largest])
    largest = right;

  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([i, arr[largest], largest, arr[i]]);
    swap(arr, i, largest);
    heapify(arr, n, largest, animations);
  }
}

// Bubble Sort
export function getBubbleSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  const n = auxiliaryArray.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([j, auxiliaryArray[j + 1], j + 1, auxiliaryArray[j]]);
        swap(auxiliaryArray, j, j + 1);
      } else {
        animations.push([j, auxiliaryArray[j], j + 1, auxiliaryArray[j + 1]]);
      }
    }
  }

  return animations;
}

// Selection Sort
export function getSelectionSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  const n = auxiliaryArray.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push([minIdx, j]);
      animations.push([minIdx, j]);
      if (auxiliaryArray[j] < auxiliaryArray[minIdx]) {
        minIdx = j;
      }
    }
    animations.push([i, auxiliaryArray[minIdx], minIdx, auxiliaryArray[i]]);
    swap(auxiliaryArray, i, minIdx);
  }

  return animations;
}

// Insertion Sort
export function getInsertionSortAnimations(arr) {
  const animations = [];
  const auxiliaryArray = arr.slice();
  const n = auxiliaryArray.length;

  for (let i = 1; i < n; i++) {
    let key = auxiliaryArray[i];
    let j = i - 1;
    animations.push([i, i]);
    animations.push([i, i]);
    while (j >= 0 && auxiliaryArray[j] > key) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      animations.push([j + 1, auxiliaryArray[j]]);
      auxiliaryArray[j + 1] = auxiliaryArray[j];
      j--;
    }
    animations.push([j + 1, key]);
    auxiliaryArray[j + 1] = key;
  }

  return animations;
}

// Helper function
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

  
// Merge Sort algorithm (already present in the previous file)
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  } 
    else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}