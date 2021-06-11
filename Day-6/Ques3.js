function first_n_number(arr, n) {
    if (n === undefined) { return arr[0]; }
    if (n < 0) { return []; }

    var b = arr.slice(0, n);
    return b;
}
console.log(first_n_number([7, 9, 0, -2]));
console.log(first_n_number([], 3));
console.log(first_n_number([7, 9, 0, -2], 3));
console.log(first_n_number([7, 9, 0, -2], 6));
console.log(first_n_number([7, 9, 0, -2], -3));