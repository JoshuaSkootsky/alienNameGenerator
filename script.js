function isAscii(string) {
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode > 127) return false;
  }
  return true;
}

const textField = document.getElementById('comment');
const result = document.getElementById('result');

function setResult() {
   result.innerHTML = isAscii(textField.value) ? " the string is ASCII " : " the string is not ASCII"
}

textField.addEventListener('input', setResult);

/* function doThing(){
   alert('Horray! Someone wrote something!');
} */