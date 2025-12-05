export function padLeft(value: number | string, length: number): string {
  let text = String(value);
  while (text.length < length) {
    text = " " + text;
  }
  return text;
}

export function printMultiplicationTable(numbers: Array<number>) {
  // first, let's figure out the biggest value
  const biggest = numbers.reduce((acc, n) => (n > acc ? n : acc));

// then, find the biggest possible result to compute its magnitude
  let biggestResult = biggest * biggest;
  let magnitude = 0;
  while (biggestResult > 0) {
    magnitude++;
    biggestResult = Math.floor(biggestResult / 10);
  }
  magnitude++;

  // finally, calculate and output the nicely formatted multiplication tabl
  let titleRow = padLeft("*", magnitude) + " ||";
  for (const n of numbers) {
    titleRow += padLeft(n, magnitude) + " |";
  }

  console.log(titleRow);
  console.log("=".repeat(titleRow.length));
  
  for (const n of numbers) {
    let row = padLeft(n, magnitude) + " ||";
    for (const m of numbers) {
      row += padLeft(n * m, magnitude) + " |";
    }
    console.log(row);
  }
}
