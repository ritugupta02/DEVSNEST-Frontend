function most_frequent_number(arr) {
    var mfn = -1;
    var c;
    let i, j;
    for (i = 0; i < arr.length; i++) {
        var a = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                a++;
            }

            if (a > mfn) {
                mfn = a;
                c = arr[i];
            }
        }

    }
    console.log(c + '(' + mfn + 'times)');

}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
most_frequent_number(arr1);