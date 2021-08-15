var desc = document.getElementsByTagName('p');
const person = {
    0: "John",
    1: "vb",
    2: "Jwdefohn",
    3: "efkj",
    4: "fejk",
    5: ";lkj",
    6: "qa",
    7: "ascc",
    8: "cv",
    9: "bv",
    10: "Da",
    11: "Da",
    12: "vb",
    13: "Jwdefohn",
    14: "efkj",
    15: ";lkj",
    16: "qa",
    17: "ascc",
    18: "cv",
    19: "bv",
    20: "Da",
    21: "Da",
    22: "Da",
    23: "Da",
    24: "Da",
    25: "Da",
    26: "John",
    27: "vb",
    28: "Jwdefohn",
    29: "efkj",
    30: "fejk",
    31: "John",
    32: "vb",
    33: "Jwdefohn",
    34: "efkj",
    35: "fejk"
};

// function randomUniqueNum(range, outputCount) {

//     let arr = []
//     for (let i = 1; i <= range; i++) {
//         arr.push(i)
//     }

//     let result = [];

//     for (let i = 1; i <= outputCount; i++) {
//         const random = Math.floor(Math.random() * (range - i));
//         result.push(arr[random]);
//         arr[random] = arr[range - i];
//     }

//     return result;
// }
// z = randomUniqueNum(26, 25);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (let x in person) {
    x = getRndInteger(0, 25);
    desc[x].innerHTML = person[x];
}