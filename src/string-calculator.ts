

function Add(input: string) {
    if (input.length === 0) {
        return 0;
    }
    if (input.length === 1) {
        if (/^\d+$/.test(input)) {
            return input;
        } else {
            return 0;
        }
    }
}