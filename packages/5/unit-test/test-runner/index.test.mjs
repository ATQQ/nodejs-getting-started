import test from 'node:test'
import assert from 'assert'

test('1等于1', () => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1)
})

test('两个对象相等', () => {
  assert.deepStrictEqual({ a: 1, b: 2 }, { a: 1, b: 2 })
})

test('1不等于2', () => {
  assert.ok(1 === 2)
})
