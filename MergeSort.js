//sorts array by using divide and conquer method
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    const middleIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex, arr.length)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

//Compares left and right arrays at index - pushes lower value to resultArr and increments that array
function merge(leftArr, rightArr) {
    let resultArr = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex])
            leftIndex += 1
        } else {
            resultArr.push(rightArr[rightIndex])
            rightIndex += 1
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex)); // Adds leftover value from merge function to end of resultArr
}

arr = [2,7,3,22,78,25,5,9,66,34,11,55]

console.log(mergeSort(arr))