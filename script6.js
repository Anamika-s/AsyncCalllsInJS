console.log("Using xhr object using events");

let btnGetText = document.getElementById("btnGetText");
btnGetText.addEventListener('click', GetText);
let btnInsertRecorsd =  document.getElementById("btnInsertRecorsd");
btnInsertRecorsd.addEventListener('click', InsertRecorsd);

var xhr;
function GetText ()
{
 xhr = new  XMLHttpRequest();
//  xhr.open("Get", "https://jsonplaceholder.typicode.com/posts")
xhr.open("Get", "data.json")
  
xhr.onprogress = () =>
 {
  console.log(xhr.readyState);
 }
 xhr.onload = () =>
 {
  document.getElementById("div1").innerHTML  = xhr.responseText;

 }
 xhr.send(null);
}


function InsertRecorsd()
{
  xhr = new  XMLHttpRequest();
  var obj=
  {
   "name":"anamika",
   "job":"dev"
  };
xhr.getResponseHeader("Content-type","application/json");
 xhr.open("post", "https://reqres.in/api/users");
 xhr.onload = () =>
 {
  document.getElementById("div1").innerHTML  = xhr.responseText;

 }
 xhr.send(obj);


}
 







