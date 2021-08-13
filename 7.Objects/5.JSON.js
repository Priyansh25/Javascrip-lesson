/* JS object notation
    - Inspired by object literal notation
    - Property names have to be wrapped in double quotes

    
*/

var obj = { name:'ravi', city:'Jbp'}

var JSONobj = {"id":1, "name":"ravi", "city":"Jbp"}

console.log(JSONobj)

var person = {"id":1, "name":"ravi", "city":"Jbp"}

var jsonstring=JSON.stringify(person)
console.log(jsonstring, typeof jsonstring)


var jsonparse=JSON.parse(jsonstring)
console.log(jsonparse, typeof jsonparse)