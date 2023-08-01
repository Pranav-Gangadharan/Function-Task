//Task (Do the following problems in function,Anonymous function,arrow function,IIFE function)
// 1.Print odd numbers in an array

//--->normal function

// let arr = [2, 4, 5, 77, 35, 38, 24, 55];
// let odd = [];

// function findOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             odd.push(arr[i]);
//         }
//     }
//     return odd;
// }

// console.log(findOdd(arr));

//--->Anonymous function

// let arr = [2, 4, 5, 77, 35, 38, 24, 55];
// let odd = [];

// let findOdd = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 != 0) {
//                 odd.push(arr[i]);
//             }
//         }
//         return odd;
// }

// console.log(findOdd(arr));

//--->IIFE function

// let arr = [2, 4, 5, 77, 35, 38, 24, 55];
// let odd = [];

// (function findOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             odd.push(arr[i]);
//         }
//     }
//     console.log(odd);
// })(arr)

//--->arrow function

// let arr = [2, 4, 5, 77, 35, 38, 24, 55];
// let odd = [];

// const findOdd = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 2 != 0) {
//                 odd.push(arr[i]);
//             }
//         }
//         return odd;
// }

// console.log(findOdd(arr));


// 2.Convert all the strings to title caps in a string array

//--->Normal function

// let string = ["think", "twice", "code", "once!"];
// let result = "";
// function titileCap(s) {
//     let f;
//     let l;
//     for (let i = 0; i < s.length; i++) {
//         f = s[i].substring(0, 1).toUpperCase();
//         l = s[i].substring(1);
//         result = result + " " + f + l;
//     }
//     return result;
// }

// console.log(titileCap(string))

//--->Anonymous function

// let string = ["think", "twice", "code", "once!"];
// let result = "";

// let titileCap = function (s) {
//     let f;
//     let l;
//     for (let i = 0; i < s.length; i++) {
//         f = s[i].substring(0, 1).toUpperCase();
//         l = s[i].substring(1);
//         result = result + " " + f + l;
//     }
//     return result;
// }

// console.log(titileCap(string));

//--->IIFE

// let string = ["think", "twice", "code", "once!"];
// let result = "";

// (function titileCap(s) {
//     let f;
//     let l;
//     for (let i = 0; i < s.length; i++) {
//         f = s[i].substring(0, 1).toUpperCase();
//         l = s[i].substring(1);
//         result = result + " " + f + l;
//     }
//     console.log(result);
// })(string)

//--->Arrow function(ES6)

// let string = ["think", "twice", "code", "once!"];
// let result = "";

// const titileCap = (s) => {
//     let f;
//     let l;
//     for (let i = 0; i < s.length; i++) {
//         f = s[i].substring(0, 1).toUpperCase();
//         l = s[i].substring(1);
//         result = result + " " + f + l;
//     }
//     return result;
// }

// console.log(titileCap(string));

// 3.Sum of all numbers in an array

//--->Normal function

// let arr = [2, 4, 77, 34, 23]; //140

// function sum(arr) {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add = add + arr[i];
//     }
//     return add;
// }

// console.log(sum(arr))

//---> Anonymous function

// let arr = [2, 4, 77, 34, 23]; //140

// let sum = function (arr) {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add = add + arr[i];
//     }
//     return add;
// }

// console.log(sum(arr));

//--->IIFE

// let arr = [2, 4, 77, 34, 23]; //140

// (function sum(arr) {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add = add + arr[i];
//     }
//     console.log(add);
// })(arr);

//--->Arrow function

// let arr = [2, 4, 77, 34, 23];

// const sum = (arr) => {
//     let add = 0;
//     for (let i = 0; i < arr.length; i++) {
//         add = add + arr[i];
//     }
//     return add;
// }

// console.log(sum(arr));

// 4.Return all the palindromes in an array

//--->Normal function

// let arr = ["amma", "dare", "121", "223", "malayalam"];

// function checkPalindrome(name) {
//     if (name === name.split("").reverse().join("")) {
//         return true;
//     }
//     return false;
// }

// for (let s = 0; s < arr.length; s++) {
//     if (checkPalindrome(arr[s]) == true) {
//         console.log(arr[s] + " " + "is a palindrome");
//     } else {
//         console.log(arr[s] + " " + "is not a palindrome");
//     }
// }

//--->Anonymous function

// let arr = ["amma", "dare", "121", "223", "malayalam"];

// let checkPalindrome = function (name) {
//     if (name === name.split("").reverse().join("")) {
//         return true;
//     }
//     return false;
// }

// for (let s = 0; s < arr.length; s++) {
//     if (checkPalindrome(arr[s]) == true) {
//         console.log(arr[s] + " " + "is a palindrome");
//     } else {
//         console.log(arr[s] + " " + "is not a palindrome");
//     }
// }

//--->IIFE

// let arr = ["amma", "dare", "121", "223", "malayalam"];

// (function checkPalindrome(name) {
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] === name[i].split("").reverse().join("")) {
//             console.log(arr[i] + " " + "is a palindrome");
//         } else {
//             console.log(arr[i] + " " + "is not a palindrome");
//         }
//     }

// })(arr)

//--->Arrow function

// let arr = ["amma", "dare", "121", "223", "malayalam"];

// const checkPalindrome = (name) => {
//     if (name === name.split("").reverse().join("")) {
//         return true;
//     }
//     return false;
// }

// for (let s = 0; s < arr.length; s++) {
//     if (checkPalindrome(arr[s]) == true) {
//         console.log(arr[s] + " " + "is a palindrome");
//     } else {
//         console.log(arr[s] + " " + "is not a palindrome");
//     }
// }


//-----------------------COMPLETED--------------------------//
