/* eslint-env jest */
import MyClass from '../MyClass'

describe('MyClass', () => {
  test('instance', () => {
    const message = 'lol'
    const instance = new MyClass(message)
    expect(instance.message).toBe(message)
    expect(instance.bar()).toBe(message)
  })

  test('static', () => {
    expect(MyClass.foo({a: 1})).toEqual({a: 1, b: 2})
  })
})
