function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    return getSomeValue() * getSomeValue()
  }
  
  const result = myFunction(5)

  // the result will be 4 since called for 2 * 2

  console.log(result);