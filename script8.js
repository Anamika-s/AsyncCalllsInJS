console.log("Fetch Api Demo calling Fake WebApi")
let btnFetchApi = document.getElementById("btnFetchApi");
btnFetchApi.addEventListener('click', FetchApi);
let btnInsertRecorsdUsingFetchApi = document.getElementById("btnInsertRecorsdUsingFetchApi");
btnInsertRecorsdUsingFetchApi.addEventListener('click', InsertRecorsdUsingFetchApi);

function FetchApi()
{
   console.log("Inside FetchApi");

   fetch("https://reqres.in/api/users").then( (resp)=>
   {
    // console.log(resp)
  return resp.json();
   }).then(response=>
   {
    console.log(response.data)

   });
}

function InsertRecorsdUsingFetchApi()
{
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');
 var data = {
  "name" :"anamika",
  "job":"dev" 
   
 }
 var obj = 
 {
 method:'post',
 headers: headers,
 body: data,
 }
  
 fetch("https://reqres.in/api/users",obj).then((resp)=>
 {
  console.log(resp)
  return resp.json()
 }).then(response=>
  {
    console.log(response);
  })
}