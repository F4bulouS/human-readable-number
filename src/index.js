const BASE_DICT = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
};

const DECIMAL_DICT = {
    2: "twen",
    3: "thir",
    4: ["four", "for"],
    5: "fif",
    6: "six",
    7: "seven",
    8: "eigh",
    9: "nine"
};

module.exports = function toReadable(number) {
    // Info from here: https://speakasap.com/en/grammar/chislitelnye/

    let readableNum = "";

    if (number == 0)
    {
        readableNum = "zero";
    }
    else if (number >= 100)
    {
        readableNum = getReadableHundred(number) + getReadableDecimal(number % 100);
    }
    else
    {
        readableNum = getReadableDecimal(number);
    }

    return readableNum.trim();

}

function getReadableHundred(number) {
    return readableNum = BASE_DICT[Math.floor(number / 100)] + " hundred ";
}

function getReadableDecimal(number) {
    if ((number >= 0) && (number < 13))
    {
        return BASE_DICT[number];
    }
    else if ((number >= 13) && (number <= 19))
    {
        let remainder = number % 10;
        return ((remainder == 4) ? DECIMAL_DICT[remainder][0] : DECIMAL_DICT[remainder]) + "teen";
    }
    else
    {
        let decimal = Math.floor(number / 10);
        return ((decimal == 4) ? DECIMAL_DICT[decimal][1] : DECIMAL_DICT[decimal]) + "ty " + BASE_DICT[number % 10];
    }
}
