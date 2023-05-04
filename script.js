let person = {firstName:"John",
lastName:"Doe",
age:24,
eyeColor:"blue",
 sayHello : function Hello(x){
     
   
   console.log('hello there ' + x)
 }
};
console.log(person.sayHello(person.firstName))