function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
  }
  
  const result = myFunction(5)

  // the result will be 10 because function getsomevalue is called in myfunction * num1

  console.log(result)