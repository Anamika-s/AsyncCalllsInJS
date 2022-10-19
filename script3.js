console.log("Inside Script3");

const students = [
  {name:"Deepak", subject:"English"},
  
  {name:"Sagar", subject:"English"},
  
  {name:"Ajay", subject:"Maths"}
];

function EnrollStudents(student, DisplayStudents)
{
   setTimeout(()=>
   {
    students.push(student);
     console.log("Student is registered")
     DisplayStudents();
   }, 2000);
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
EnrollStudents(student, DisplayStudents);

// DisplayStudents();