function Add(input) {
    const numericValueRegex = /^\d+$/;
    let defaultDelimiter = /,|\n/
    if (input.length === 0) {
        return 0;
    }
    if (input.length === 1) {
        if (numericValueRegex.test(input)) {
            return input;
        } else {
            return 0;
        }
    }

    let sum = 0;
    if (input.substring(0, 2) === "//") {
        const defaultDelimiterEnd = input.indexOf("\n");
        defaultDelimiter = new RegExp(input.substring(2, defaultDelimiterEnd));
        input = input.substring(defaultDelimiterEnd + 1);
    }

    const numbersArray = input.split(defaultDelimiter).map(Number);
    const negativeNumbers = numbersArray.filter((number) => number < 0);
    if(negativeNumbers.length){
        throw new Error("negative numbers not allowed: " + negativeNumbers.join(", "));
    }
    sum = numbersArray.reduce((prevSum, number) => prevSum + parseInt(number), 0);

    return sum;
}


