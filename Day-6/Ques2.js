function ac(val) {
    var _clone = val.slice(0);
    return _clone;
}

console.log(ac([1, 2, 4, 0]));
console.log(ac([1, 2, [4, 0]]));

