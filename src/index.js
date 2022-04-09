import store from "./store";
import {bugAdded} from './actions'



store.dispatch(bugAdded("Bug1"))


console.log(store.getState())







































// import {compose, pipe} from 'lodash/fp'

// let input = "      JavaScript      "
// let trim = str => str.trim()
// let toLowerCase = str => str.toLowerCase()
// // const wrapInDiv = str => `<div>${str}</div>`
// const wrap= type => str => `<${type}>${str}</${type}>`

// // const result = wrapInDiv(toLowerCase(trim(input)))


// const transform = pipe( trim, toLowerCase, wrap("span"), )

// console.log(transform(input))

// console.log(result)

// const person ={name: "John",
// address: {
//     street: "Main",
//     city: "Boston"
// }
// };

// // const updated = Object.assign({}, person, {age: 30, name: "Jane"});

// const updated = {...person, 
    
    
//     name: "Jane",
    
//     age: 30,
//     address: {
//         ...person.address,
//         city: "New York"
//     }


// };

// console.log(person, updated)

// const numbers = [1,2,3]

// const index = numbers.indexOf(2)

// const added = [...numbers.slice(0,index),

//             4,
//         ...numbers.slice(index)]

//         console.log(added)


// import {Map} from 'immutable'

// let book = Map({title: 'Haryr Pott'});

// function publish(book) {
//   return   book.set("isPublished", true);
// }

// book = publish(book);
// console.log(book.toJS())

// import {produce} from 'immer'

// let book ={title: 'Haryr Pott'};

// function publish(book) {
//  return  produce(book, draftBook => {
//     draftBook.isPublished = true;
//     });  
    
// }

// const updated = publish(book);
// console.log(updated)

