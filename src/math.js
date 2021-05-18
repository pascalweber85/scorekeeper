export function add(...rest) {
  // rest === [1,2,3] muss nicht rest heißen kann alles sein
  return rest.reduce((sum, cur) => {
    return sum + cur
  })
}
