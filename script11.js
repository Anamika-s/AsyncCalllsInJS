console.log("Async Await Demo");

  async function Hello()
{
  console.log("Inside Hello");
  const response = await fetch("https://api.github.com/users");
  console.log("before resoonse");
  const users = await response.json();
  console.log("after response");
  return users;
}

// console.log(Hello());
console.log("Before Calling Hello");
// let a = Hello();
Hello().then(response=>
{
  console.log(response)
}).catch(error=>
{
  console.log("error")
})

console.log("After Calling Hello");
// console.log(a);
console.log("This is the last statement");