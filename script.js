const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const numberOfPasswords = 4
const generatePasswordButton = document.getElementById("generate-btn")
const passwordContainer1 = document.getElementById("pw1")
const passwordContainer2 = document.getElementById("pw2")
const passwordLengthSlider = document.getElementById("pw-length-slider")
const passwordLength = document.getElementById("password-length")
const clickToCopy = document.getElementById("click-to-copy")
let clickToCopyTimer

generatePasswordButton.addEventListener("click", generatePasswords)
passwordLengthSlider.addEventListener("input", setPasswordLength)

passwordLength.textContent = passwordLengthSlider.value

function generatePasswords() {

  let pass1arr = []
  let pass2arr = []

  let useNumbers = document.getElementById("numbers-switch").checked
  let useSymbols = document.getElementById("symbols-switch").checked

  for (let i = 0; i < passwordLengthSlider.value; i++) {

    pass1arr.push(characters[getRandomChar(useNumbers, useSymbols)])
    pass2arr.push(characters[getRandomChar(useNumbers, useSymbols)])
  }

  let pass1 = pass1arr.join('')
  let pass2 = pass2arr.join('')

  passwordContainer1.textContent = pass1
  passwordContainer2.textContent = pass2

  passwordContainer1.addEventListener("click", function() {
    navigator.clipboard.writeText(pass1)
    clickToCopy.textContent = "Copied"
    clickToCopyTimer = setTimeout(function() {
      clickToCopy.textContent = "Click to copy"
    }, 2000)
  })
  passwordContainer2.addEventListener("click", function() {
    navigator.clipboard.writeText(pass2)
    clickToCopy.textContent = "Copied"
    clickToCopyTimer = setTimeout(function() {
      clickToCopy.textContent = "Click to copy"
    }, 2000)
  })

  clickToCopy.textContent = "Click to copy"

  //styling
  passwordContainer1.classList.add("active-pass")
  passwordContainer2.classList.add("active-pass")
}

function getRandomChar(inclNum, inclSym) {
  let randomChar = Math.floor((Math.random() * characters.length))

  if (inclNum && inclSym) {
    return randomChar
  } else if (!inclNum && inclSym) {
    if (randomChar > 51 && randomChar < 62) {
      return getRandomChar(inclNum, inclSym)
    } else {
      return randomChar
    }
  } else if (inclNum && !inclSym) {
    if (randomChar >= 62) {
      return getRandomChar(inclNum, inclSym)
    } else {
      return randomChar
    }
  } else if (!inclNum && !inclSym) {
    if (randomChar > 51) {
      return getRandomChar(inclNum, inclSym)
    } else {
      return randomChar
    }
  }
}


function setPasswordLength() {
  passwordLength.textContent = passwordLengthSlider.value
}