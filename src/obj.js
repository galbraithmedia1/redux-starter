const person ={name: "John"};

const updated = Object.assign({}, person, {age: 30, name: "Jane"});
console.log(updated)