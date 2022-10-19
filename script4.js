console.log("Using xhr object");

let btnGetText = document.getElementById("btnGetText");
btnGetText.addEventListener('click', GetText);
var xhr;
function GetText ()
{
 xhr = new  XMLHttpRequest();
console.log(xhr.readyState);  // not init > 0
xhr.open("Get", "data.txt");
console.log(xhr.readyState); // init > 1
xhr.send(null);
xhr.onreadystatechange = StateChange;
}

function StateChange()
{
  console.log("State has been changed"+ xhr.readyState)
  if(xhr.readyState==4 && xhr.status==200)
  console.log(xhr.responseText)
  document.getElementById("div1").innerHTML  = xhr.responseText;
}