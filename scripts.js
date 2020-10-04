const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const button0 = document.getElementById('button0')

const buttonHashTag = document.getElementById('buttonHashTag')
const buttonAsteristic = document.getElementById('buttonAsteristic')

const screen = document.getElementById('screen-text')
const screenReal = document.getElementById('screen-text-real')

const allNumbers = document.getElementById('allNumbers')

const finalWord = []

button1.addEventListener('click', () => {
  const botton = button1.innerText
  showNumber(botton)
})

button2.addEventListener('click', () => {
  const botton = button2.innerText
  showNumber(botton)
})

button3.addEventListener('click', () => {
  const botton = button3.innerText
  showNumber(botton)
})

button4.addEventListener('click', () => {
  const botton = button4.innerText
  showNumber(botton)
})

button5.addEventListener('click', () => {
  const botton = button5.innerText
  showNumber(botton)
})

button6.addEventListener('click', () => {
  const botton = button6.innerText
  showNumber(botton)
})

button7.addEventListener('click', () => {
  const botton = button7.innerText
  showNumber(botton)
})

button8.addEventListener('click', () => {
  const botton = button8.innerText
  showNumber(botton)
})

button9.addEventListener('click', () => {
  const botton = button9.innerText
  showNumber(botton)
})

button0.addEventListener('click', () => {
  const botton = button0.innerText
  showNumber(botton)
})

buttonAsteristic.addEventListener('click', () => {
  finalWord.length = 0;
  screen.innerText = ""
  screenReal.innerText = ""
})

buttonHashTag.addEventListener('click', () => {
  const screen = document.getElementById('screen-text').innerText
  const letter = createLetter(screen)
  saveLetters(letter)
})

function showNumber(number) {
  const oldNumber = screen.innerText
  screen.innerText = oldNumber + number
}

function saveLetters(letter) {
  finalWord.push(letter)
  screen.innerText = ""
  console.log(finalWord)
  createWord()
}

function createWord() {
  screenReal.innerText = ""
  finalWord.map(letter => {
    const oldLetter = screenReal.innerText
    screenReal.innerText = oldLetter + letter
  })
}

function createLetter(number) {
  let letter = ''
  switch (number) {
    case "2":
      letter = "A"
      break;
    case "22":
      letter = "B"
      break;
    case "222":
      letter = "C"
      break;
    case "3":
      letter = "D"
      break;
    case "33":
      letter = "E"
      break;
    case "333":
      letter = "F"
      break;
    case "4":
      letter = "G"
      break;
    case "44":
      letter = "H"
      break;
    case "444":
      letter = "I"
      break;
    case "5":
      letter = "J"
      break;
    case "55":
      letter = "K"
      break;
    case "555":
      letter = "L"
      break;
    case "6":
      letter = "M"
      break;
    case "66":
      letter = "N"
      break;
    case "666":
      letter = "O"
      break;
    case "7":
      letter = "P"
      break;
    case "77":
      letter = "Q"
      break;
    case "777":
      letter = "R"
      break;
    case "7777":
      letter = "S"
      break;
    case "8":
      letter = "T"
      break;
    case "88":
      letter = "U"
      break;
    case "888":
      letter = "V"
      break;
    case "9":
      letter = "W"
      break;
    case "99":
      letter = "X"
      break;
    case "999":
      letter = "Y"
      break;
    case "9999":
      letter = "Z"
      break;
    case "0":
      letter = "-"
      break;

    default:
      alert('Não existe letras para este numero. Tente novamente!')
      break;
  }
  return letter
}

