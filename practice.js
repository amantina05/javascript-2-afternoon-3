/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  In this repo your job is to write functions to make each function call work properly.

  Here's an example of code that will be given to you:

  sayHi('Hi Katie', function(thingToSay){
    alert(thingToSay);
  });

  It would be your job to create the sayHi function:

  var sayHi = function(str, cb){
    cb(str);
  }
*/

////////// PROBLEM 1 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// Code Here
function first (arr, func){
  //returns the first item of the arr to the callback
  return func(arr[0])
}
// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});
// Do not edit the code above.


////////// PROBLEM 2 //////////

/*
  Write a function called last that takes in an array and a callback function.
  Then invoke the callback, passing in the last element in the array as the argument.
*/

//Code Here
function last (arr, func){
  //should multiply the first two parameters and pass the result to the callback
    //pass the result to the callback means when invoking it put what is asked in the ()
  return func(arr[arr.length - 1])
}
// Do not edit the code below.
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});
// Do not edit the code above.


////////// PROBLEM 3 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.
  Invoke the callback, passing in the product of the two numbers multiplied as the argument.
*/

//Code Here
function multiply (one, two, func){
  return func(one * two)
}
// Do not edit the code below.
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});
// Do not edit the code above.


////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.
  Check if the name exists in the array.
  If it does, invoke the callback with true as the argument.
  If the name does not exist, invoke the callback with false as the argument.
*/

//Code Here
function contains (arr, names, func){
  //checks if the name exisits in the arr
  if (arr.includes(names)){
    //invokes the callback w t || f
    return func(true)
  }
  return func(false)
}
// Do not edit the code below.
contains(names, 'Colt', function(result){
  if (result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.


////////// PROBLEM 5 //////////******

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

//Code Here
function uniq (arr, func){
  let newArr = []
  //as long as array is bigger than 0
  while (arr.length > 0){
    let val
    val = arr.pop(0)
    //if the array does not include val
    if (!arr.includes(val)){
      //push all them to new arr
      newArr.push(val)
    }
  }
  //return func invoked w newarr
  console.log(func(newArr))
  return func(newArr)
}

// Do not edit the code below.
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
// Do not edit the code above.


////////// PROBLEM 6 //////////******

/*
  Write a function called each that takes in an array of names and a callback function.
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here
function each (arr, func){
  for (let i = 0; i < arr.length; i++){
    let curr = arr[i]
    console.log(func(curr, i))
    return func(curr, i)
  }
}
// function each (arr, func){
//   for (let it in arr){
//    func(arr[it], it)
//   }
// }

// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.


////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here
function getUserById (arr, id, func){
  //for in loops through an obj
  for (let i in arr ) {
    //checks if the arr contains the id
    if (arr[i].id === id){
      //prints the third object
      //console.log(arr[i])
      //prints the third objects id
      //console.log(arr[i].id)

      //if it does return he invoked cb with the arr obj
      return func(arr[i])
    }
  }
}
// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
// Do not edit the code above.
