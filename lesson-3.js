// Task 1
let n = 100; i = 1;
const arr = [];
while (i <= n) {
  let j = 2;
  let isSimple = true;
  while (isSimple && j < i) {
    if (i % j === 0) isSimple = false;
      j++;
  }
  if (isSimple) arr.push(i);
  i++;
}

//Task 2 and 3
let cart =[
  ['Куртка', 1 , 5000],
  ['Шапка', 1 ,800],
  ['Носки', 5 ,300]
]

let count = 0;

function countBasketPrice(arr) {
  for (var i = 0; i < arr.length; i++) {
      count = count +  arr[i][1] * arr[i][2];
  }
  return count;
}


//Task 4
// for (var i = 0; i < 10; console.log(i++)) {
// }

// //Task 5
// for (var str = ''; str.length < 5; console.log(str += '+')) {
// }