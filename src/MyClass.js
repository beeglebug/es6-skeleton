// proof that plugins are working
export default class MyClass {
  constructor (message) {
    this.message = message
  }

  // static functions and spread operator is ok
  static foo (a) { return { ...a, b: 2 } }

  // bound class functions
  bar = () => this.message
}
