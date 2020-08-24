test("two plus two is four", () => {
  class Test {
    testing(p: string): string {
      return p;
    }
  }

  const test = new Test();
  expect(test.testing("test")).toBe("test");
});
