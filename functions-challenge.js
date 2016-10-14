// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){

    return x > y ? x : y

    // if (x > y ) {
    //     return x
    // } else {
    //     return y
    // }
}

console.log(max(4,5))
console.assert(max(4, 5) === 5)

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    var numbers =  [x, y, z]

    var maxNumber = numbers.reduce(function(previous, current) {
        return previous >= current ? previous : current
    }, 0)

    return maxNumber
    //
    // if (x > y && x > z) {
    //     return x
    // } else if (y > x && y > z) {
    //     return y
    // } else {
    //     return z
    // }
}

console.log(maxOfThree(7, 9, 4))
console.assert(maxOfThree(4, 5, 6) === 6)

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var isVowel

    switch (char) {
        case 'a':
            isVowel = true
            break;
        case 'e':
            isVowel = true
            break;
        case 'i':
            isVowel = true
            break;
        case 'o':
            isVowel = true
            break;
        case 'u':
            isVowel = true
            break;
        default:
            isVowel = false
    }

    return isVowel
}

console.log(isVowel('a'))
console.assert(isVowel('t') === false)
console.assert(isVowel('a') === true)

// ---------------------
// Write a function translate() that will translate a text into "Rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    // var newPhrase = ''

    return phrase.split('').map(function(letter) {
        return isVowel(letter) || letter === ' ' ? letter : letter + 'o' + letter
    }).join('')
    //
    // for (var i = 0; i < phrase.length; i++) {
    //     if (isVowel(phrase[i])) {
    //         newPhrase += phrase[i]
    //     } else if (phrase[i] === ' ') {
    //         newPhrase += phrase[i]
    //     }else {
    //         newPhrase += phrase[i] + 'o' + phrase[i]
    //     }
    // }
    // return newPhrase.join('')
}

console.log (rovarspraket('this is fun'))
console.assert(rovarspraket('this is fun') === 'tothohisos isos fofunon')


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    return string.split('').reverse().join('')
}

console.log(reverse('jag testar'))
console.assert(reverse('jag testar') === 'ratset gaj')


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
    var longestWord = words.reduce(function(previous, current) {
        return previous.length > current.length ? previous : current
    }, '')

    return longestWord
}

console.log(findLongestWord(['indianaasdfasdfdsf', 'tom', 'indianapolis', 'carrie']))
console.assert(findLongestWord(['indianaasdfasdfdsf', 'tom', 'indianapolis', 'carrie']) === 'indianaasdfasdfdsf')
console.assert(findLongestWord(['indianaasdfasdfdsf', 'tom', 'indianapolis', 'carrie']) != 'tom')

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
    var longerWords =  words.filter(function(word) {
        return word.length > i ? true : false
    })

    return longerWords
}

console.log(filterLongWords(['to', 'that', 'colts', 'indianapolis', 'hoosiers', 'cool'], 6))
console.assert(JSON.stringify(filterLongWords(['to', 'that', 'colts', 'indianapolis', 'hoosiers', 'cool'], 6)) === JSON.stringify(['indianapolis', 'hoosiers']))

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    var chars = string.split('')
    var freqChars = {}
    // var counter = 0

    chars.forEach(function(char) {
        if (typeof freqChars[char] == 'undefined') {
            // console.log(char)
            freqChars[char] = 1
        } else {
            freqChars[char]++
        }

    })

    return freqChars

}

console.log(charFreq("abbabcbdbabdbdbabababcbcbab"))
console.assert(JSON.stringify(charFreq("abbabcbdbabdbdbabababcbcbab")) === JSON.stringify({a: 7, b: 14, c: 3, d: 3}))
