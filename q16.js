function myFunction(num1) {
    if(false) {
      return -100
    }
  
    return num1 * 10
  }
  
  const result = myFunction(5)

  // the result will be 50 beceasue the statement is true so it will pass and return num1 * 10

  console.log(result);