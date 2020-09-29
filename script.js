const textField = document.getElementById('comment');
const result = document.getElementById('result');
// add event listener to textField
textField.addEventListener('input', setResult);

function chooseRandom(array) {
  const max = array.length;
  return array[getRandomInt(max)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setResult() {
  const name = textField.value;
   result.innerHTML = alienNameMaker(name, encoder)
}

function alienNameMaker(name, encoder) {
  // given a name string
  // encode it into alien name with the encoder mapping
  let alienName = '';
  for (let i = 0; i < name.length; i++) {
    const char = name[i].toLowerCase();

    const alienCharArray = encoder[char];
    // this char array may be undefined. if not truthy, skip it
    if (alienCharArray) {
      const alienChar = chooseRandom(alienCharArray);
       alienName = alienName + alienChar;
    }
   
  }
  return alienName;
}

/* function doThing(){
   alert('Horray! Someone wrote something!');
} */

// this object maps each letter of the alphabet to an array of alien letters
const encoder = {
    a: ["å", "œ"],
    b: ["boo", "bb"],
    c: ["krax", "ç"],
    d: ["du", "∂"],
    e: ["i-i", "é"],
    f: ["wa", "ƒ"],
    g: ["k", "˚kay"],
    h: ["ℍ", "^"],
    i: ["-hi", "î"],
    j: ["j", "∆"],
    k: ["k`", "˚"],
    l: ["la", "¬"],
    m: ["meep", "µ"],
    n: ["in", "ñ"],
    o: ["ȫ ", "ø"],
    p: ["plorg", "π"],
    q: ["qlax", "kyo"],
    r: ["ar", "rar"],
    s: ["smork", "ß"],
    t: ["trarg", "†"],
    u: ["oo", "ü"],
    v: ["vyort", "√"],
    w: ["weewo", "∑"],
    x: ["⸖", "≈"],
    y: ["yamska-i'liax", "¥"],
    z: ["Ⱬ", "Ω"]
  };