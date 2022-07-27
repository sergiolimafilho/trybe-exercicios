const array = [1,2,3,4]

console.log(array);

array.push(5);

console.log(array);

function pequenos(number) {
    return number <= 3;
}

() => array.filter(pequenos);

console.log(array)