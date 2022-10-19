// Anonymous Methods

// Regular Function
// function Hello()
// {
//    console.log("Hello");
// }

// Hello();

// Anonymous Method , feature that is available in ES6

const Hello = () =>
{
  console.log("Hello");
}

Hello();
// Regular Function
// function Add(no1, no2)
// {
//   console.log(no1+no2);
// }

// Add(9,2);

const Add = (no1,no2) =>
{
   console.log(no1+no2);
}

Add(2,3);


// const Subtract = (no1, no2) =>
// {
//    return no1- no2;
// } 

const Subtract = (no1, no2) => no1- no2;
 

console.log(Subtract(10,2));








