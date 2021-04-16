describe('Matchers', () => {
  test('Exact Equality - two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('Object equality - object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  test('Truthyness - null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('Numbers - two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('String - but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  test('Arrays - the shopping list has beer on it', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];

    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });
});
