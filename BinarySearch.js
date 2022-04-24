// Binary search 
// Only works on ordered arrays

// Want to check array of n elements for certain value

// Start with ordered array and finding midpoint.
// Is value > midpoint?

let arr = [1,2,3,4,5,6,7,8]
let start = 0
let end = arr.length - 1
let target = 8 

function binarySearch(arr, start, end, target){
    if (start > end) return false; // Stop after checking arr
    let midIndex = Math.floor((start + end) / 2);  // Floor returns the natural log (base e) of num
        if (arr[midIndex] === target) return true;  // Index = target

        if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target) // Checks left side array
        else return binarySearch(arr, midIndex + 1, end, target) // Checks right side
}

console.log(binarySearch(arr, start, end, target))


