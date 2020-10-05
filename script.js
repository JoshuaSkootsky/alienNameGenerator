const humanNameInput = document.getElementById('humanNameInput');
const alienNameDisplay = document.getElementById('alienNameDisplay');
// add event listener to textField
humanNameInput.addEventListener('input', encodeName);

const alienNameInput = document.getElementById('alienNameInput');
const humanNameDisplay = document.getElementById('humanNameDisplay');
alienNameInput.addEventListener('input', decodeName)


function chooseRandom(array) {
  const max = array.length;
  return array[getRandomInt(max)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function encodeName() {
  const name = humanNameInput.value;
  alienNameDisplay.innerText = alienNameMaker(name, encoder)
}

function decodeName() {
  const name = alienNameInput.value;
  humanNameDisplay.innerText = alienNameDecoder(name, encoder)
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


function alienNameDecoder(alienName, encoder) {
  let humanName = '';
  const decoder = makeDecoder(encoder);
  for (let i = 0; i < alienName.length; i++) {
    // need to fuzz this dynamically
    let alienLetter = alienName[i];
    let humanLetter = decoder[alienLetter];
    if (humanLetter) {
        humanName += humanLetter;
    }
    else {
      while(!humanLetter && i < alienName.length) {
        alienLetter += alienName[++i];
        if(decoder[alienLetter]) {
          humanLetter = decoder[alienLetter];
          humanName += humanLetter;
        }
      } 
    }
  
  }
  return humanName;
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
    z: ["Ⱬ", "Ω"],
    ' ': [' ', '.', '-']
  };

function makeDecoder(encoding) {
  const decoder = {};
  for (const letter in encoding) {
    const arr = encoding[letter];
    arr.forEach(alienWord => {
      decoder[alienWord] = letter;
    })
    
  }
  return decoder;
}