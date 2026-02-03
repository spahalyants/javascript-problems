function findKey(array, object, key) {
    const value = object[key];

    if (array.includes(value)) {
        return `There is ${value} in array`;
    }

    return `There is no ${value} in array`;
}

console.log(
    findKey(['lemon', 'apple', 'banana'], { fruit: 'apple' }, 'fruit')
);
// There is apple in array

console.log(
    findKey(['lemon', 'apple', 'banana'], { fruit: 'orange' }, 'fruit')
);
// There is no orange in array
