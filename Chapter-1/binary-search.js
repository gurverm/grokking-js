function binarySearch(list, item) {
  // low and high keep track of which part of the list you'll search in
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    // while we havent narrowed it down to one element
    let mid = low + high; // check the middle element
    let guess = list[mid];
    if (guess == item) {
      // found the item
      return mid;
    } else if (guess > item) {
      // if guess was too high
      high = mid - 1;
    } else {
      // if guess was too low
      low = mid + 1;
    }
  }
  return;
}

let myList = [1, 3, 5, 7, 9];
let result = binarySearch(myList, 5);
console.log(result);

// binary search has a time complexity of O(log n)
