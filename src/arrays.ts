/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length === 0
        ? []
        : [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNumbers = numbers.map((snum: string): number =>
        isNaN(parseInt(snum)) ? 0 : parseInt(snum)
    );
    return newNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.

export const removeDollars = (amounts: string[]): number[] => {
    return stringsToIntegers(
        amounts.map((amount: string): string =>
            amount[0] === "$" ? amount.slice(1) : amount
        )
    );

    /*
    //console.log(amounts);
    const numAmounts = amounts
        .map((amount: string): number =>
            amount != "$" ? parseInt(amount.replace("$", "")) : 0
        )
        .map((amount: number): number => (isNaN(amount) ? 0 : amount));
    //console.log(numAmounts);
    return numAmounts;
    */
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const corrected = messages
        .map((message: string): string =>
            message[message.length - 1] === "!"
                ? message.toUpperCase()
                : message
        )
        .filter(
            (message: string): boolean => message[message.length - 1] != "?"
        );
    return corrected;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkRGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return checkRGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return (
        addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        ) +
        "=" +
        (addends.length === 0 ? "0" : addends.join("+"))
    );
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index = values.findIndex((value: number): boolean => value < 0);
    index = index < 0 ? values.length : index;
    const preVals = values.slice(0, index);
    const sum = preVals.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const newVals = [...values];
    newVals.splice(index + 1, 0, sum);
    return newVals;
}