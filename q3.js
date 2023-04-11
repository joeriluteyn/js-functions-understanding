function myFunction(num) {
    return num-1
  }
  
  let num = 10
  num = myFunction(num)
  num = myFunction(num)

  console.log(num)

  // num will be 8 beceause the function is called twice