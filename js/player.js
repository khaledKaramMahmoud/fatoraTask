var desc = document.getElementsByTagName('p'),
    color = document.getElementsByClassName("card-color");

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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (let x in person) {
    x = getRndInteger(0, 25);
    desc[x].innerHTML = person[x];
    x = getRndInteger(0, 13);
    color[x].style.background = '#027a30';
    x = getRndInteger(0, 3);
    color[x].style.background = '#000';

}
// for (let x in person) {


// }