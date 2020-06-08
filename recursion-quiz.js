function sheep(num) {
  //The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
  if (num === 0) {
    return console.log("All sheep jumped over the fence");
  }

  let count = num;
  console.log(`${count} sheep jumped over the fence`);
  count--;
  sheep(count);
}

//sheep(3);

function powerCalculator(int, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    return "exponent should be greater than zero";
  }

  return int * powerCalculator(int, exp - 1);
}
// console.log(powerCalculator(10, 3));

function reverse(str) {
  if (str === "") {
    return "";
  }

  //move index 0 to str.length
  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("cat"));
