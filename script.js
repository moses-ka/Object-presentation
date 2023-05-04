let person = {firstName:"John",
lastName:"Doe",
age:24,
eyeColor:"blue",
 sayHello : function Hello(x){
     
   
   console.log('hello there ' + x)
 }
};
let secPerson = {
  firsName : 'noor',
  lastName : 'sam',
  age : 28,
  
  
}
secPerson.age = 55
console.log(person.sayHello(person.firstName))
const objSt = person.age.toString()
console.log(objSt)

let newObj = {
  secPerson , job : 'designer',
}
console.log(newObj)
delete secPerson.firsName

console.log(secPerson)
secPerson.every()
console.log(secPerson)
