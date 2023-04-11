function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
  }
  
  const result = myFunction(5)

  // the result will be 10 since both functions are called

  console.log(result)