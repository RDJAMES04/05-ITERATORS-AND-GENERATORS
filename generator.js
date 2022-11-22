function createGenerator(count) {
  let index = 0
  let n1 = 0
  let n2 = 1
  let nextTerm
  return function* generatorFunction() {
    while (index < count) {
      yield n1
      nextTerm = n1 + n2
      n1 = n2
      n2 = nextTerm
      index += 1
    }
    return index
  }
}
const generatorFunction1 = createGenerator(8)
const generatorObject1 = generatorFunction1()

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; i++) {
  console.log(generatorObject1.next())
}
const generatorFunction2 = createGenerator(8)
const generatorObject2 = generatorFunction2()
console.log([...generatorObject2])
