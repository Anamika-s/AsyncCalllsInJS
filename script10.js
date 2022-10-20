console.log("Inside Script10 using Promise");

const students = [
  {name:"Deepak", subject:"English"},
  
  {name:"Sagar", subject:"English"},
  
  {name:"Ajay", subject:"Maths"}
];

function EnrollStudents(student)
{
   return new Promise((resolve, reject) =>
   {
     const error= true;
    
      setTimeout(()=>
      {
      if(!error)
      {
      students.push(student);
      resolve("Student is registered")
      }
      else 
      {
        reject("Student is not added");
      }
    }, 2000);
})
}
  

function DisplayStudents()
{
  let str ="";
   setTimeout(()=>
   {
    students.forEach((student) =>
    {
      str+= `<li> ${student.name} </li>`;
       console.log(student.name)

    })
    document.getElementById("listOfStudents").innerHTML = str;
   }, 1000);
}

student = {name:"Mahesh", subject:"Science"};
// EnrollStudents(student, DisplayStudents);

// DisplayStudents();


// CONSUMING CODE
EnrollStudents(student).then(response=>
{
  console.log(response);
   DisplayStudents();

}).catch(error=>
{ DisplayStudents();
  console.log(error)
})
