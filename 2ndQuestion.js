function prime(num) {
  if (num <= 1) {
    return false;
  }

  var divisor = 2;

  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor++;
  }

  return true;
}

var a = 17;
if (prime(a)) {
  console.log(`${a} is prime number`);
} else {
  console.log(`${a} is not prime number`);
}
