const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')
const teksti = document.querySelector('p')

let arvaustenMaara = 0

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "libary",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = '*'.repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
}

teksti.textContent = 'Arvauksien määrä: ' + arvaustenMaara

const win = () => {
    arvaustenMaara++
    alert(`Arvasit oikein, sana on ${randomizedWord}. Arvausten määrä: ${arvaustenMaara}. `)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i + 1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i, 1, guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame ()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault() // Prevent form submission

        const guess = input.value
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win()
            }
        } else {
            alert("Arvasit väärin!")
        }
        input.value=''
        arvaustenMaara++
        teksti.textContent = 'Arvauksien määrä: ' + arvaustenMaara
    }
})