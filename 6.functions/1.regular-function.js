function getname(){
//console.log('Hello')

return 'scott desting'

}
var name=getname()
console.log(name)

// console.log('hey')
// console.warn('Please check this')
// console.info('Provide more info')
// console.error('There is error')

function getFullname (firstname, lastname){

    return firstname + ' ' + lastname

}
var fullname = getFullname()
console.log(fullname,typeof fullname)

// var a = 2+1+"uma"+3+4
// console.log(a,typeof a)

// var a = undefined+"Hello"
// console.log(a,typeof a)

var fullname2 = getFullname("Adam")
console.log(fullname2,typeof fullname2)

var fullname3 = getFullname("Adam","colom")
console.log(fullname3,typeof fullname3)