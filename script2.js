// console.log("Start");
// console.log("In Between");
// console.log("End");

 // setTimeOut( ()  => 
//  {

//  }, time in ms)



// console.log("Start");
// setTimeout( ()=> {
//   console.log("In Between");
// }, 1000);
// console.log("End")

// var numbers  = [1,2,3,4,5,6];
// // Foreach is synchronous
// console.log("Start");
// // for(var i=0)
// numbers.forEach(item => 
//   {
//     console.log(item)
//   });
// console.log("End")


// console.log("Start")
// function getName(name)
// {
//    setTimeout(() => 
//    {
//      console.log("Inside getName "); return name;
//    },1000);
// }

// var name = getName("Ajay");
// console.log(name)
// console.log("End")



console.log("Start")
function getName(name , callback)
{
   setTimeout(() => 
   {
     console.log("Inside getName "); callback(name);
   },1000);
}
 
// var name = getName("Deepak");
 getName("Deepak", (name)=>
 {
  console.log(name)
 })

 console.log("End")





