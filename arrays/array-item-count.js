function checkQuantity(arr, num) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }

    return count;
}

console.log(checkQuantity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 2));
console.log(checkQuantity([1, 5, 2, 4, 5, 6, 7, 5, 2, 10], 5));