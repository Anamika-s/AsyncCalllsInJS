console.log("Fetch Api Demo")
let btnFetchApi = document.getElementById("btnFetchApi");
btnFetchApi.addEventListener('click', FetchApi);


function FetchApi()
{
   console.log("Inside FetchApi");

   fetch("data.txt").then( (resp)=>
   {
    console.log(resp)
  return resp.text();
   }).then(response=>
   {
    console.log(response)

   });


   
}