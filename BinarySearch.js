// Binary search 
// Only works on ordered arrays

// Want to check array of n elements for certain value

// Start with ordered array and finding midpoint.
// Is value > midpoint?

let arr = []
let start = 0
let target = 877
arr = Array.from({
    length: 1000
}, (v, k) => k + 1) // Create array
let end = arr.length - 1

function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end)); // Show searched arr
    if (start > end) return false; // Stop after checking arr
    let midIndex = Math.floor((start + end) / 2); // Floor returns the natural log (base e) of num
    if (arr[midIndex] === target) return true; // Index = target

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target) // Checks left of midIndex
    else return binarySearch(arr, midIndex + 1, end, target) // Checks right of midIndex
}

console.log(binarySearch(arr, start, end, target))