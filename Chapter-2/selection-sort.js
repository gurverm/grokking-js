// We begin by defining a function that finds the smallest element in an array
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
    return smallestIndex;
  }
}

// Now we can use the above function to write the selection sort
function selectionSort(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallest(arr);
    newArr.push(arr.splice(smallestIndex, 1)[0]);
  }
  return newArr;
}

let myArr = [5, 3, 6, 2, 10];
let result = selectionSort(myArr);

console.log(result);
