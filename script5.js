console.log("Using xhr object using events");

let btnGetText = document.getElementById("btnGetText");
btnGetText.addEventListener('click', GetText);
var xhr;
function GetText ()
{
 xhr = new  XMLHttpRequest();
 xhr.open("Get", "data.txt")
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

 