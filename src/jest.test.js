test('common matcher', () => {
  expect(2 + 3).toBe(5)
})

test('to be true or false', () => {
  expect(1).toBeTruthy() // 测试1是不是为true
  expect(0).toBeFalsy() // 测试0不是不为false
})

test('test number', () => {
  expect(4).toBeGreaterThan(3) // 测试4是不是比3大
  expect(2).toBeLessThan(3) // 测试2不是不比3小
})

test('test Object', () => {
  expect({ name: 'riming' }).toEqual({ name: 'riming' }) // 测试Object的值是否相等
})