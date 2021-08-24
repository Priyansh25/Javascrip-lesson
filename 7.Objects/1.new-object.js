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

person[address][state]="Madhya Pradesh";
person[address][city]="Jabalpur";
person[address][country]="India";
console.log(person)