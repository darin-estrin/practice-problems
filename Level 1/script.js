// Level 1
// problem 1
function reverseArray(arr) {
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}
console.log('Problem 1: Reverse Array');
console.log(['hello', 45, 'Bob', 'what', '23']);
console.log(reverseArray(['hello', 45, 'Bob', 'what', '23']));


// problem 2
function sort_array(arr) {
  var numArr = [];
  var strArr = [];
  var boolArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      strArr.push(arr[i]);
    }
    if (typeof arr[i] === 'number') {
      numArr.push(arr[i]);
    }
    if (typeof arr[i] === 'boolean') {
      boolArr.push(arr[i]);
    }
  }
  return [numArr, strArr, boolArr];
}
console.log('Problem 2: Sort array by data type.');
console.log(sort_array(['hello', 34, true, false, 'goodbye', 56, 12, '25', true]));


// problem 3
function sort(arr) {
  var temp;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  for (var j = 0; j < arr.length; j++){
    if (arr[j] > arr[j+1]){
      sort(arr);
    }
  }
  return arr;
}
console.log('Problem 3: sort array');
console.log(sort(['mouse', 'human', 'cat', 'dog']));
console.log(sort(['mouse', 'cat', 'dog', 'human']));




// problem 4
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0){
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
console.log('problem 4: FizzBuzz');
console.log(fizzBuzz());

// problem 5
function randomize_list(arr) {
  var randomArray = [];
  var i = Math.floor(Math.random() * arr.length);
  while (arr.length > 0){
    randomArray.push(arr[i]);
    arr.splice(i, 1);
    i = Math.floor(Math.random() * arr.length);
  }
  return randomArray;
}
console.log('Problem 5: Randomize List');
console.log('First Array: ', [5, 3, 2, 5, 1]);
console.log("First Test:", randomize_list([5, 3, 2, 5, 1]));
console.log('Second Array: ', [1,3,5,1,2,5]);
console.log("Second Test: ", randomize_list([1,3,5,1,2,5]));



// problem 6
console.log('Problem 6: Bipolor Loop');
for (var i = 0, j = 10; i <= 10, j >=0; i++, j--) {
  console.log(i, j);
}
