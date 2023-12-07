//your JS code here. If required.
for (let i = 1; i <= 20; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // If neither a multiple of 3 nor 5, use the number itself
  if (!output) {
    output = i.toString();
  }

  alert(output);
}

