function searchDouble(arr, number) {
    return arr.includes(number) && arr.includes(number ** 2);
}

console.log(searchDouble([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// true   (2 and 4 exist)

