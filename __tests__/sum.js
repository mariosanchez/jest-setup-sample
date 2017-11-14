import sum from '../sum';

test('sums two numbers', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});

// test.skip Will skip this test
// test.only Will only run this test
