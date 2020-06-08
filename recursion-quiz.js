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
  const char = str[0];
  return reverse(str.slice(1)) + char;
}

// console.log(reverse("this should reverse"));

function tri(n) {
  if (n < 1) {
    return 1;
  }
  return n + 1 + tri(n - 1);
}

console.log(tri(3));

function split(str) {
  if (str.indexOf("/") === -1) {
    return [str];
  }

  const char = str.indexOf("/");
  const before = str.slice(0, char);
  const after = str.slice(char + 1, str.length);
  return [before, ...split(after)];
}

console.log(split("12/20/2020"));

function fib(num) {
  //num1 + num2 = num 3
  //when length > num passed in, stop = base case
  if (num <= 1) {
    return num;
  }
  return fib(num - 2) + fib(num - 1);
}

console.log(fib(2));

function factorial(num) {
  //factorial = num  num -1
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

function solveMaze(maze, i, j, path) {
  maze = [
    [" ", " ", " ", "*", " ", " ", " "],
    ["*", "*", " ", "*", " ", "*", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", "*", "*", "*", "*", "*", " "],
    [" ", " ", " ", " ", " ", " ", "e"],
  ];

  console.log(maze[i], maze[j]);
  if (i < 0) {
    console.log("error 1 triggered");
    return;
  }
  if (j < 0) {
    console.log("error 2 triggered");
    return;
  }
  if (maze[i][j] === "V") {
    console.log("V selected!");
    return;
  }

  if (maze[i] || maze[j] === undefined) {
    console.log("another error triggered");
    return;
  }
  if (j > maze[i].length) {
    console.log("error 3 triggered");
    return;
  }
  if (i > maze[j].length) {
    console.log("error 4 triggered");
    return;
  }

  if (maze[i][j] === "e") {
    return path;
  } else {
    maze[i][j] = "V";
  }

  solveMaze(maze, i, j + 1, path + "R");
  solveMaze(maze, i + 1, j, path + "D");
  solveMaze(maze, i, j - 1, path + "L");
  solveMaze(maze, i - 1, j, path + "U");
}

console.log(solveMaze([], 0, 0, ""));
