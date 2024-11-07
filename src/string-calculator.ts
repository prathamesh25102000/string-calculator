function Add(input: string) {

    const newLineDelimiter = /\n/g;
    const numericValueRegex = /^\d+$/;

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

    const numbers = input.replace(newLineDelimiter, ',').split(',');
    const sum = numbers.reduce((prevSum, number) => prevSum + parseInt(number, 10), 0);

    return sum;
}