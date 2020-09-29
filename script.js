function alienNameMaker(name, encoder) {
  // get name from form 
  // encode it into alien name with the encoder mapping

}

const textField = document.getElementById('comment');
const result = document.getElementById('result');

function setResult() {
   result.innerHTML = "result goes here";
}

textField.addEventListener('input', setResult);

/* function doThing(){
   alert('Horray! Someone wrote something!');
} */

// this object maps each letter of the alphabet to an alien letter
const encoder = {
  a: "å",
  b: "bo",
  c: "krax",
  d: "du",
  e: "i-i",
  f: "wa",
  g: "k",
  h: "ℍ",
  i: "-hi",
  j: "j",
  k: "k`",
  l: "la",
  m: "mep",
  n: "in",
  o: "ȫ ",
  p: "plorg",
  q: "qlax",
  r: "ar",
  s: "sork",
  t: "trag",
  u: "oo",
  v: "vyrt",
  w: "weewo",
  x: "⸖",
  y: "yamski-af'liax",
  z: "Ⱬ"
};