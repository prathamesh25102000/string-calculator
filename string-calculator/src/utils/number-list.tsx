export default function getNumberList(input: string) {

  if(!input.length){
    return [];
  }
  
  let delimiters = ["\n", ","];
  const specialCharactersRegex = /[.*+?^${}()|[\]\\]/g;
  const customDelimiterRegex = /\[(.*?)\]/g;

  if (input.substring(0, 2) === "//") {
    const delimiterEndIndex = input.indexOf("\n");
    const delimiterExpression = input.substring(2, delimiterEndIndex);
    const customDelimiters = delimiterExpression.match(customDelimiterRegex);

    if (customDelimiters) {
      delimiters = customDelimiters.map((item: string) =>
        item.slice(1, -1).replace(specialCharactersRegex, "\\$&")
      );
    } else {
      delimiters = [
        delimiterExpression.replace(specialCharactersRegex, "\\$&"),
      ];
    }
    input = input.substring(delimiterEndIndex + 1);
  }

  const delimiterRegex = new RegExp(delimiters.join("|"));
  const numbersArray = input.split(delimiterRegex).map(Number);

  return numbersArray;
}
