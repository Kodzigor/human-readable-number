module.exports = function toReadable(number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const tens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    function threeDigitsConvert(number) {
        let resString = "";

        if (number == 0) {
            return "zero";
        }

        if (number < 100) {
            resString += twoDigitsOrLess(number);
            return resString;
        }

        resString += units[number.toString().charAt(0)];
        resString += ` hundred`;

        if (number.toString().substring(1) !== "00") {
            resString += ` ${twoDigitsOrLess(
                parseInt(number.toString().substring(1))
            )}`;
        }
        return resString;
    }

    function twoDigitsOrLess(number) {
        let numbersInStringPresentation = "";

        if (number < 10) {
            return units[number];
        }
        if (number in tens) {
            numbersInStringPresentation += tens[number];
        } else {
            numbersInStringPresentation += dozens[number.toString().charAt(0)];

            if (number.toString().charAt(1) !== "0") {
                numbersInStringPresentation += ` ${
                    units[number.toString().charAt(1)]
                }`;
            }
        }
        return numbersInStringPresentation;
    }

    // console.log(twoDigitsOrLess(3));
    // return twoDigitsOrLess(number);
    return threeDigitsConvert(number);
};

// function toReadable(number) {
//     const units = {
//         0: "zero",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//     };

//     const tens = {
//         10: "ten",
//         11: "eleven",
//         12: "twelve",
//         13: "thirteen",
//         14: "fourteen",
//         15: "fifteen",
//         16: "sixteen",
//         17: "seventeen",
//         18: "eighteen",
//         19: "nineteen",
//     };

//     const dozens = {
//         2: "twenty",
//         3: "thirty",
//         4: "forty",
//         5: "fifty",
//         6: "sixty",
//         7: "seventy",
//         8: "eighty",
//         9: "ninety",
//     };

//     function threeDigitsConvert(number) {
//         let resString = "";

//         if (number == 0) {
//             return " ";
//         }

//         if (number < 100) {
//             resString += twoDigitsOrLess(number);
//             return resString;
//         }

//         resString += units[number.toString().charAt(0)];
//         resString += ` hundred`;

//         if (number.toString().substring(1) !== "00") {
//             resString += ` ${twoDigitsOrLess(
//                 parseInt(number.toString().substring(1))
//             )}`;
//         }
//         return resString;
//     }

//     function twoDigitsOrLess(number) {
//         let numbersInStringPresentation = "";

//         if (number < 10) {
//             return units[number];
//         }
//         if (number in tens) {
//             numbersInStringPresentation += tens[number];
//         } else {
//             numbersInStringPresentation += dozens[number.toString().charAt(0)];

//             if (number.toString().charAt(1) !== "0") {
//                 numbersInStringPresentation += ` ${
//                     units[number.toString().charAt(1)]
//                 }`;
//             }
//         }
//         return numbersInStringPresentation;
//     }

//     // console.log(twoDigitsOrLess(3));
//     // return twoDigitsOrLess(number);
//     return threeDigitsConvert(number);
// }

// console.log(toReadable(100));
