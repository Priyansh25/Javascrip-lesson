
var hello=function (){
    return "hello Buddies"
}
//console.log(hello)
var msg= hello()
 console.log(msg)

 var getfullname = function(firstname,lastname){
     return firstname + ' ' + lastname
 }
 var fullname=getfullname("Tarun","Bhai")
 console.log(fullname)

 var obj = {
     firstname = "Priyansh",
     lastname ="Dubey",

     getfullname:function(){
         this.firstname+' '+this.lastname
     }

 }

