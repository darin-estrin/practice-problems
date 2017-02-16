// Level 0
// problem 1
function do_math(num1, num2, operator) {
  var value;
  switch (operator) {
    case '+':
      value = num1 + num2;
      break;
    case '-':
      value = num1 - num2;
      break;
    case '*':
    case 'x':
    case 'X':
      value = num1 * num2;
      break;
    case '/':
      value = num1 / num2;
      break;
    default:
      value = 'Not a valid statement';
  }
  return value;
}

console.log(do_math(5,2,'*'));

// Problem 2
function random_range(start_num, end_num) {
  if(Array.isArray(start_num)) {
    return start_num[Math.floor(Math.random() * start_num.length)];
  } else {
    var range = end_num - start_num;
    return Math.floor(Math.random() * range + start_num);
  }
}
console.log(random_range(2,15));
console.log(random_range(1,100));
console.log(random_range(['a','b','c','d','e']));


 // problem 3
function combo_math(a,b,c,d,e) {
  return ((((a * b) + c) / d) - e);
}
console.log(combo_math(3,2,6,3,5));

// problem 4
function find_middle(str) {
  var middle;
  if (str.length % 2 !== 0) {
    middle = Math.floor(str.length / 2);
    return str[middle];
  } else {
    middle = str.length / 2;
    return str[middle - 1] + str[middle];
  }
}

console.log(find_middle_letters('seven'));
console.log(find_middle_letters('dish'));

// problem 5
function invert_negative(num) {
  if (isNaN(num)){
    return false;
  } if (num < 0) {
    return parseFloat(num);
  } else {
    return parseFloat(('-' + num), 10);
  }
}

console.log(invert_negatives(-5));
console.log(invert_negatives(4000));
console.log(invert_negatives('puppies'));
