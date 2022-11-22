function createIteratable(count) {
  let value = 0
  let n1 = 0; let n2 = 1; let nextTerm
  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result
          if (value < count) {
            result = { value: n1, done: false }
            nextTerm = n1 + n2
            n1 = n2
            n2 = nextTerm
            value += 1
            return result
          }
          return { value, done: true }
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
