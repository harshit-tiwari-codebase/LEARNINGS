//...num is rest operator

function addNUM(...num) {
  let sum = 0;

  for (let n of num) {
    sum += n;
  }
  console.log(sum);
}

addNUM(1, 2, 3, 4, 5, 6, 7, 8, 9);
