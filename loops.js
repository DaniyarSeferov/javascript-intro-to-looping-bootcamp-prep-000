function forLoop(newArray) {
  for (let i = 1; i <= 25; i++) {
    /*if (i === 0) {
      newArray[i] = "I am 0 strange loop."
    }
    else*/ if (i === 1) {
      newArray.push("I am 1 strange loop.")
    }
    else {
      newArray.push("I am ${i} strange loops.")
    }
  }
  console.log(newArray)
  return newArray
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

function doWhileLoop(newArray) {
  
}

var newArray = []
forLoop(newArray)