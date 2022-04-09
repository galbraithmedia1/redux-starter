import {compose, pipe} from 'lodash/fp'

let input = "      JavaScript      "
let trim = str => str.trim()
let toLowerCase = str => str.toLowerCase()
// const wrapInDiv = str => `<div>${str}</div>`
const wrap= type => str => `<${type}>${str}</${type}>`

// const result = wrapInDiv(toLowerCase(trim(input)))


const transform = pipe( trim, toLowerCase, wrap("span"), )

console.log(transform(input))

// console.log(result)