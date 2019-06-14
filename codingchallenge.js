const _ = require('./lodash')

// 1. Create a collection of products

let products = [
    {
        name: 'Laptop',
        price: 1500,
        code: 1234
    },
    {
        name: 'Apple',
        price: 3,
        code: 3466
    },
    {
        name: 'Watch',
        price: 110,
        code: 8385
    },
    {
        name: 'Hat',
        price: 30,
        code: 1337
    },
    {
        name: 'Banana',
        price: 2,
        code: 3833
    },
    {
        name: 'TV',
        price: 550,
        code: 0941
    },
    {
        name: 'Car',
        price: 11000,
        code: 4333
    },
    {
        name: 'Car',
        price: 11000,
        code: 4333
    },
]

// 2. Order products by price
let orderedPrice = _.orderBy(products, 'price', ['desc'])
console.log('Ordered price:', orderedPrice)

// 3. Extract unique products by Code
let uniqueCode = _.uniqBy(products, 'code')
console.log('Unique Products:' , uniqueCode)

let orderedCode = _.orderBy(uniqueCode, 'code')
console.log('Ordered code:', orderedCode)


// 4. Add tax 10% to each product
let giveTax = _.map(products, (e) => {
    return {
        price: e.price * 1.10
        
    }
})

console.log('Prices with tax: ', giveTax)


// 5. Calculate total price of all products

let calcTotal = _.sumBy(giveTax, (e) => 
{ return e.price
})

console.log('Total price:' , calcTotal)
