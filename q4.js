function myFunction(num) {
    return num-1
  }
  
  let num = 10
  let add = 3
  add = myFunction(add)
  add = myFunction(add)

  // num does not change because it is not affected in the function add becomes 1 because it is called twice

  console.log(num)
  console.log(add)


