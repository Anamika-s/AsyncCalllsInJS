console.log("Promise Demo")

// pending
// resolved
// rejected

// PRODUCING CODE
function func1()
{
  return new Promise( function(resolve, reject)
  {
  setTimeout(()=>
  { const error = false;
    if(!error)
    {
    // console.log("Your promise has been resolved");
    // resolve();
    resolve("Your promise has been resolved");
    }
    else
    {
      // console.log("Your promise has not been fulfilled");
      // reject();
      reject("Your promise has not been fulfilled");
    }
  }, 2000);
  })
}

// // CONSUMING CODE

// func1().then(()=>
//   {
//  console.log("Resolved");
//   }).catch(()=>
//   {
//  console.log("rejected")
//   })


// CONSUMING CODE

func1().then((response)=>
  {
//  console.log("Resolved");
 console.log(response);
  }).catch((error)=>
  {
//  console.log("rejected")
 console.log(error);
  })
