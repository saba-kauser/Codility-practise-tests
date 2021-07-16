'use strict';

// ----------------------------------PermCheck-------------------------------

// const PermCheck = function (A) {
// const [...s] = new Set(A.sort((a, b) => a - b));
// // console.log(s);
// let n = 1;
// for (let i = 0; i < s.length - 1; i++) {
//   const b = s[i] !== s[i + 1] - 1;
//   if (b) {
//     n = 0;
//     break;
//   }
// }
// return n;

//below gives 100
//   const length = A.length;

//   var result = A.reduce((acc, value) => {
//     acc[value] = true;
//     return acc;
//   }, {});

//   for (var i = 1; i <= length; i++) {
//     if (!result[i]) {
//       return 0;
//     }
//   }

//   return 1;
// };

// console.log(PermCheck([1, 4, 2, 3]));

// ----------------------------------CountDiv-------------------------------

// const countDiv = function (A, B, K) {
//   // let count = 0;
//   // if (A <= B)
//   //   for (let i = A; i <= B; i++) {
//   //     if (i % K === 0) {
//   //       count++;
//   //     }
//   //   }
//   // return count;

//   //below gives 100
//   // return Math.floor(B / K) - Math.ceil(A / K) + 1;
// };

// console.log(countDiv(4, 28, 4));

// ----------------------------------CountDiv-------------------------------

// function solution(S, P, Q) {
//   var dna = '';
//   var ans = [];

//   for (var i = 0; i < P.length; i++) {
//     dna = S.slice(P[i], Q[i] + 1);

//     if (dna.indexOf('A') !== -1) {
//       ans.push(1);
//     } else if (dna.indexOf('C') !== -1) {
//       ans.push(2);
//     } else if (dna.indexOf('G') !== -1) {
//       ans.push(3);
//     } else {
//       ans.push(4);
//     }
//   }

//   return ans;
// }

// console.log(test('CAGCCTA', [2, 5, 0], [4, 5, 6]));

// ----------------------------------minAvgtwo-------------------------------

// def solution(A):
//     min_avg_value = (A[0] + A[1])/2.0   # The mininal average
//     min_avg_pos = 0     # The begin position of the first
//                         # slice with mininal average
//     for index in xrange(0, len(A)-2):
//         # Try the next 2-element slice
//         if (A[index] + A[index+1]) / 2.0 < min_avg_value:
//             min_avg_value = (A[index] + A[index+1]) / 2.0
//             min_avg_pos = index
//         # Try the next 3-element slice
//         if (A[index] + A[index+1] + A[index+2]) / 3.0 < min_avg_value:
//             min_avg_value = (A[index] + A[index+1] + A[index+2]) / 3.0
//             min_avg_pos = index
//     # Try the last 2-element slice
//     if (A[-1]+A[-2])/2.0 < min_avg_value:
//         min_avg_value = (A[-1]+A[-2])/2.0
//         min_avg_pos = len(A)-2
//     return min_avg_pos

//--------------------------------------PassingCars------------------------------

// const PassingCars = function (A) {
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 0) {
//       for (let j = i + 1; j < A.length; j++) {
//         if (A[j] === 1) {
//           count++;
//         }
//       }
//     }
//   }
//   if (count === 1000000000) {
//     return -1;
//   }

//   return count;

//or below gives 100

//   let numCarsGoingEast = 0;
//   let numPassing = 0;

//   if (A.length > 1) {
//     for (let i = 0; i < A.length; i++) {
//       if (A[i] == 0) {
//         numCarsGoingEast++;
//       } else {
//         numPassing += numCarsGoingEast;
//         console.log(numPassing);
//       }

//       if (numPassing > 1000000000) return -1;
//     }
//   }

//   return numPassing;
//   //
// };

// console.log(PassingCars([1, 0, 0, 1, 1]));

// ------------------------------------Stringsplit------------------------------

// const stringSplit = function (s) {
//   let emptystr = '';
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (emptystr.includes(s[i])) {
//       count++;
//       emptystr = '';
//       emptystr = s[i];
//     } else {
//       emptystr = emptystr.concat(s[i]);
//     }
//   }
//   if (emptystr) return count + 1;
// };

// console.log(stringSplit('abacbac'));

// ------------------------------------StringComb------------------------------

// const sol = function (A) {
//   let sum = 1;
//   for (let i = 0; i < A.length; i++) {
//     sum = sum * A[i];
//   }
//   if (sum > 1) {
//     return 1;
//   }
//   if (Math.abs(sum) === 0) {
//     return 0;
//   }
//   if (sum < 1) {
//     return -1;
//   }
// };

// console.log(sol([1, 2, 0, -5]));

//----------------------------------------------------------
// const sort = function (A, X) {
//   var N = A.length;
//   if (N === 0) {
//     return -1;
//   }
//   var l = 0;
//   var r = N - 1;
//   while (l < r) {
//     // var m = Math.floor((l + r) / 2); //3
//     if (A[l] > X) {
//       r = m - 1;
//     } else {
//       l = m; //3
//     }
//   }
//   if (A[l] == X) {
//     return l;
//   } else {
//     return -1;
//   }
// };

// console.log(sort([1, 2, 3, 4, 6, 7, 9]), 7);

//------------------------------------------------------

// const pal = function (S) {
//   let len = S.length;

//   let str = S;
//   console.log(str);
//   let char = S[len - 1];
//   console.log(char);

//   for (let j = 0; j < len; j++) {
//     if (S[j] === '?') {
//       S.replace(S[j], char);
//     }
//   }
//   console.log(S);

//   for (let i = 0; i < len / 2; i++) {
//     if (S[i] !== S[len - 1 - i]) {
//       return 'YES';
//     }
//   }
//   return 'NO';
// };

// console.log(pal('?ab??a'));

//--------------------------------- hacker rank-----------------
// const calc = function (...A) {
//   const [a] = A;
//   const arr = [];
//   console.log(a);
//   console.log(a.length);
//   let s = 0;
//   const squareRoot = function (area, per) {
//     const val = Math.sqrt(per * per - 16 * area);
//     return val;
//   };

//   for (let i = 0; i < a.length; i++) {
//     if (i < 1) {
//       s = a[`${i + 1}`] + squareRoot(`${a[i]}`, `${a[i + 1]}`) / 4;
//     } else {
//       s = a[`${i + 1}`] - squareRoot(`${a[i]}`, `${a[i + 1]}`) / 4;
//     }
//     arr.push(s);
//   }

//   return arr.sort();
// };

// const squareRoot = function (area, per) {
//   const val = Math.sqrt(per * per - 16);
//   return val;
// };

// console.log(squareRoot(140, 40));

// console.log(Math.sqrt(39.7994974842648 * 140));

//------------------------ classes -------------
// class Polygon{
//   sum=0;
//   constructor([...A]){
//       this.A=[...A];
//   }

//   perimeter(){
//       for(let i=0;i<this.A.length;i++){
//           this.sum=this.sum+this.A[i];
//       }
//       return this.sum;
//}

//------------------------ fizz buzz -----------------------

// const fizzbuzz = function (n) {
//   // Write your code here
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     }
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log('Fizz');
//     }
//     if (i % 3 !== 0 && i % 5 === 0) {
//       console.log('Buzz');
//     }
//   }
// };

// console.log(fizzbuzz(15));

// ------------------------------braces -----------------------

// import java.util.*;
// import java.util.Scanner;

// // Write your code here. DO NOT use an access modifier in your class declaration.
// class Parser{
//     static String isBalanced(String s)
//     {
//         Stack<Character> str = new Stack();
//         String ans = "true";
//         String no = "false";
//         boolean answer = true;
//         for(int i=0; i<s.length(); i++){
//             char ch = s.charAt(i);
//             if(ch == '{' || ch == '[' || ch == '('){
//                 str.push(ch);
//                 continue;
//             }
//             if(str.isEmpty()){
//                 return no;

//             }
//             if(ch == ')'){
//                 if(str.peek() == '('){
//                     str.pop();
//                 }else{
//                     answer = false;
//                     break;
//                 }
//             }
//             if(ch == ']'){
//                 if(str.peek() == '['){
//                     str.pop();
//                 }else{
//                     answer = false;
//                     break;
//                 }
//             }
//             if(ch == '}'){
//                 if(str.peek() == '{'){
//                     str.pop();
//                 }else{
//                     answer = false;
//                     break;
//                 }
//             }

//         }
//         if(!str.isEmpty()){
//                 answer = false;
//             }
//             if(answer)
//             return ans;
//             else
//             return no;

//     }
// }
