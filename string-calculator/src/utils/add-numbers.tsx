function Add(numberList: number[]) {

  const negativeNumbers = numberList.filter((num) => num < 0);
  if (negativeNumbers.length) {
    throw new Error(
      "negative numbers not allowed: " + negativeNumbers.join(", ")
    );
  }
  let sum = 0;
  sum = numberList
    .filter((num) => num < 1001)
    .reduce((prevSum, num) => prevSum + num, 0);

  return sum;
}
