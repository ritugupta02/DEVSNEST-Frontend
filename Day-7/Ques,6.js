/*
6. Write a JavaScript program to sort an array of JavaScript objects.  
Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
 { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
  Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
   [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger 
   Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

*/

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },

    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },

    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

var arr = [];
for (i in library) {
    arr[i] = library[i].libraryID;
}

arr.sort((a, b) => (a - b));
for (var a in arr) {
    for (var b in library) {
        if (arr[a] == library[b].libraryID)
            console.log(library[b]);
    }
}