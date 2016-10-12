var moment = require('moment')

// String
var word = '        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.         '

// console.log(word.length) // <-- property (a variable essentially)
// console.log(word.toUpperCase()) // <-- method (a function essentially)
// console.log(word.toLowerCase())
// console.log(word.trim())
// word = word.toUpperCase().trim().toLowerCase()
// console.log(word)

var word = 'Knock'
word = word.repeat(2)

word = 'Pizza Is Amazing'.slice(9,16) //must specifiy stopping index
word = 'Pizza Is Amazing'.substr(9, 3) //starting point and length

word = 'Pizza Is Amazing'
word = word.split(' ')

//console.log(word )

var word = 'City of Indianapolis'
var indianaIndexStart = word.indexOf('Indiana')
var whatIsTheLetter = word.charAt(8)
// console.log(whatIsTheLetter)
var isItIndianapolis = word.includes('Indianapolis')
// console.log(isItIndianapolis)
word = word.replace('Indianapolis', 'Seattle')
// console.log(word)

var phoneNumber = 'Phone Number 123-123-1234 238-594-4059'
var hasPhoneNumber = phoneNumber.match(/\d\d\d-\d\d\d-\d\d\d\d/)
var hasPhoneNumber = phoneNumber.replace(/\d\d\d-\d\d\d-\d\d\d\d/gi, '[redacted]')
// console.log(hasPhoneNumber[0]) //get the first index of the array to get the value that matched, g = greedy or every match, i = case insensitive
// console.log(hasPhoneNumber) //get the first index of the array to get the value that matched

// Number
var number = Number('1')
number = number + (number * 50)
number++
// console.log(number)

// Math
var cost = Math.round(5.75)
var price = 12.49
var priceRounded = Math.round(price)
var priceRoundedUp = Math.ceil(price)
var priceRoundedDown = Math.floor(price)

var randomNumber = Math.round(Math.random() * 10)  // random number between 0 and 10

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[0]
price = dollars + "." + cents
// console.log(price)

// Dates
var today = new Date()
// console.log(today)
var yesterday = moment().subtract(2400, 'seconds')
// console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

// Object
var pizza = Object()
var pie = {
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzarella',
    price: 14.99,
    priceRounded: Math.round(14.99),
}

console.log(pie.price)

var list = [
    'sauce',
    'spices',
    'crust',
    12,
    true,
    moment().format('MM/DD/YYYY'),
    {
        pie: 'small',
    },
]


console.log(pizza)
// Array

var name = String('Tom')
var name2 = 'Tom'

// console.log(name === name2)

var number = Number(1) // same as 1
