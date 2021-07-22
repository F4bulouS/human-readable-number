const BASE_NUMBER = ["", "one", "two", "three", "four", "five", "six",
    "seven", "eight", "nine", "ten", "eleven", "twelve"];

const DECIMAL_NAME = {
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

    let hundred = Math.floor(number / 100);
    let readableNum = hundred > 0 ? BASE_NUMBER[hundred] + " hundred " : "";
    readableNum += getDecimalName(number);

    return readableNum.trim();
}

function getDecimalName(number) {
    let remainder = number % 100;
    if (number == 0)
    {
        return "zero";
    }
    else if (remainder == 0)
    {
        return "";
    }
    else if ((remainder > 0) && (remainder < 13))
    {
        return BASE_NUMBER[remainder];
    }
    else if ((remainder >= 13) && (remainder <= 19))
    {
        remainder = number % 10;
        return ((remainder == 4) ? DECIMAL_NAME[remainder][0] :
            DECIMAL_NAME[remainder]) + "teen";
    }
    else
    {
        let decimal = Math.floor(remainder / 10);
        return ((decimal == 4) ? DECIMAL_NAME[decimal][1] :
            DECIMAL_NAME[decimal]) + "ty " + BASE_NUMBER[number % 10];
    }
}
