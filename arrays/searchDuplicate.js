function searchDuplicate(arr) {
    const lastEl = arr[arr.length - 1];

    // find position of lastEl, excluding last index
    const prevIndex = arr.lastIndexOf(lastEl, arr.length - 2);

    if (prevIndex !== -1) {
        return 'Last element is duplicate';
    }

    return 'Last element is not duplicate';
}

console.log(searchDuplicate(['a', 'b', 'c', 'd', 'a']));
// Last element is duplicate
console.log(searchDuplicate([35, 25, 15, 55, 45]));
// Last element is not duplicate
