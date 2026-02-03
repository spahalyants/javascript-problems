function search(array, str) {
    if (!array.includes(str)) {
        return `${str} is not found`;
    }

    const firstIndex = array.indexOf(str);
    const lastIndex = array.lastIndexOf(str);

    if (firstIndex === lastIndex) {
        return firstIndex;
    }

    return [firstIndex, lastIndex];
}

console.log(search(['one', 'two', 'three', 'two', 'one'], 'two')); // [1, 3]
console.log(search(['one', 'two', 'three', 'two', 'one'], 'three')); // 2
console.log(search(['one', 'two', 'three', 'two', 'one'], 'four')); // "four is not found"
