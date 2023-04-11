let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()

// expected result for counter is 3 since it gets called twice

console.log(counter)