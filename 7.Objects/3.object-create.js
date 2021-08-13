// var p1 = new Object()
// var p2 = {}
var person = Object.create(null)

//console.log(p1)
// console.log(p2)
// console.log(p3)

var person = new Object();

person["firstname"] = "Scott"
person["lastname"] = "Morrison"

var Property="email"
person[Property]="Scott@ef.com"

console.log(person)
console.log(person["firstname"])
console.log(person["lastname"])
console.log(person["email"])

person["address"] = new Object()

person["address"]["state"]="Madhya Pradesh";
person["address"]["city"]="Jabalpur";
person["address"]["country"]="India";


console.log(person)
