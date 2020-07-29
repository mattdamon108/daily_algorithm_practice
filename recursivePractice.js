let count = 0;
function test() {
  if (count > 3) {
    return "done!";
  }

  count++;
  return test();
}

console.log(test());
