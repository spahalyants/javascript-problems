function searchStr(arr, str) {
    const index = arr.indexOf(str);

    if (index === -1) {
        return `Element ${str} is not in array`;
    }

    if (index === 0) {
        return `Element ${str} is first in array`;
    }

    if (index === arr.length - 1) {
        return `Element ${str} is last in array`;
    }

    return `Element ${str} is in the middle of array`;
}


console.log(searchStr(['a', 'b', 'c'], 'c'));
// Element c is last in array
console.log(searchStr(['a', 'b', 'c'], 'a'));
// Element a is first in array
console.log(searchStr(['a', 'b', 'c'], 'b'));
// Element b is in the middle of array
console.log(searchStr(['a', 'b', 'c'], 'd'));
// Element d is not in array
