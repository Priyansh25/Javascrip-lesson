//IIF -immediately invoked function

(function(message){
    console.log(message)
})("Welcome to IIFs");

var getMessage=(function(message){
    return message
})("Welcome to IIFs")
console.log(getMessage);

(function(message){
    return message
}("Welcome to IIFs"))
console.log(getMessage);

(10 > 9);
(console.log("hi"))


