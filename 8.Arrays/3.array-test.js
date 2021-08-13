var data = [
    1,
    "ravi",
    true,
    undefined,
    null,
    function(name){
        return name
    },
    {
        name:'Priyansh'
    },
    ["ReadableStream","Blue","Yellow"]
]

console.log(data)

var a=data[5]
var name=data[6].name
console.log(a(name))

console.log(data[5](data[6].name)+ " likes " +data[7][1])
