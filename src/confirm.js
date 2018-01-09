export default function confirm () {
  const element = document.getElementById('output')
  const confirmation = 'ok'
  element.innerText = confirmation
  return confirmation
}

// proves that plugins are working
export class Test {
  static test (a) { return { ...a, foo: true } }
  bound = () => true
}
