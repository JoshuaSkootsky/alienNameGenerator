# Is it Ascii?

Check it [out on GitHub Pages here](https://joshuaskootsky.github.io/tellMeIfItsAscii/).

Note: this link may not work, as the more interesting and fun 'Alien Name Generator' is now the master branch.

# This is just a repo for a very simple site

There's some cool stuff going on. ASCIIness is tested by using charCodeAt. If the charCode is above 127... it isn't ASCII!

Some lightweight vanilla JS reactivity is included. The isAscii script runs whenever changes are made to the input field. The input field also has autocomplete turned off so that the suggestions don't get in the way of displaying the result... is it ASCII?

# isAscii function

This is the function that tests if the input field is a string:

```javascript
function isAscii(string) {
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    if (charCode > 127) return false;
  }
  return true;
}
```

# Event listners for the form

There is an event listener on the form looking for input. When there is input, setResult fires, which uses `isAscii` to figure out if the text field is ASCII or not.

```javascript
function setResult() {
   result.innerHTML = isAscii(textField.value) ? " the string is ASCII " : " the string is not ASCII"
}
```

# Check out the REPL.it

[Link here to REPL.it for Is It ASCII?](https://repl.it/@JoshuaSkootsky/tellMeIfItsAscii)

REPL.it has an experimental function where they will turn on version control and commit to GitHub. So Hello from REPL.it!
