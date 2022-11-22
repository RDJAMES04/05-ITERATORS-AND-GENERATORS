function createIteratable(count) {
  let index = 0
  let n1 = 0
  let n2 = 1
  let nextTerm
  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          if (index < count) {
            result = { value: n1, done: false }
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
            index += 1
            return result
          }
          return { value: index, done: true }
        },
      }
    },
  }
}
const iterable1 = createIteratable(5)
// eslint-disable-next-line no-restricted-syntax
for (const number of iterable1) {
  console.log(number)
}
const iterable2 = createIteratable(5)

console.log([...iterable2])
