function forLoop(newArray) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      newArray[i] = "I am 0 strange loop."
    }
    else if (i === 1) {
      newArray[i] = "I am 1 strange loop."
    }
    else {
      newArray[i] = "I am ${i} strange loops."
    }
  }
  return newArray
}
