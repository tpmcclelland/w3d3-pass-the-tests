var moment = require('./moment.min.js')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value === undefined
}
var blockOfClay
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return true
}
console.log(isTrue(1 + 1 === 2))
console.assert(isTrue(1 + 1 === 2) === true)

// Strings
function convertCaseLower(value) {
    return value.toLowerCase()
}
console.log(convertCaseLower('I AM WISPERING.'))
console.assert(convertCaseLower('I AM WISPERING.') === 'i am wispering.')

function convertCaseUpper(value) {
    return value.toUpperCase()
}
console.log(convertCaseUpper('i am shouting!'))
console.assert(convertCaseUpper('i am shouting!') === 'I AM SHOUTING!')

function repeatWord(word, number) {
    return word.repeat(number)
}
console.log(repeatWord('Knock.', 2))
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(sentance, start_index, end_index) {
    return sentance.slice(start_index, end_index)
}
console.log(sliceWord('I love pizza!', 7, 12))
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

function splitWord(word, delimiter) {
    return word.split(delimiter)
}
console.log(splitWord('US,CA,MX,JP,UK', ','))
console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)

function whereIsCarmen(phrase, keyword) {
    return phrase.indexOf(keyword)
}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)

function doesItContain(phrase, word) {
    return phrase.includes(word)
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)

// Regular Expressions
function extractZipCode(phrase) {
    return phrase.match(/\d{5}/)[0]
}
console.log(extractZipCode('My zip code was 46240.'))
console.assert(extractZipCode('My zip code was 46240.') === '46240')

function isPhoneNumber(phrase) {
    return /\(\d{3}\)\s\d{3}.\d{4}/.test(phrase)
    //return /(\d\d\d) \d\d\d.\d\d\d\d/.test(phrase)
}
console.log(isPhoneNumber('(888) 123.1234'))
console.assert(isPhoneNumber('(888) 123.1234') === true)

// Numbers
function stringToNumber(value) {
    return Number(value)
}
console.log(stringToNumber('1999'))
console.assert(stringToNumber('1999') === 1999)

function incrementByOne(value) {
    // return value++
    return value = value + 1
}
console.log(incrementByOne(0))
console.assert(incrementByOne(0) === 1)

function isDivisibleByThree(value) {
    return value % 3 === 0
}
console.log(isDivisibleByThree(9))
console.assert(isDivisibleByThree(9) === true)

function makeRandomNumber(upperLimit) {
    return Math.round(Math.random() * upperLimit)
}
console.log(makeRandomNumber(10))
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)

function roundNumber(num) {
    return Math.round(num)
}
console.log(roundNumber(5.51))
console.assert(roundNumber(5.51) === 6)

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return moment().format('dddd')
}
console.log(justAMoment())
console.assert(justAMoment().includes('day') === true)

// Objects
function myNameIs(value) {
    return value.name = 'Tom'
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Tom')

// Arrays
function getFirstItem(value) {
    return value[0]
}
console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
