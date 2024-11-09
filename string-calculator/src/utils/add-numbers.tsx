import getNumberList from "./number-list";

export default function addNumbers(input: string) {

  const numberList = getNumberList(input);

  if (numberList.some(isNaN)) {
    throw new Error("Invalid input");
  }

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
