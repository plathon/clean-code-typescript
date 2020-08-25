import { JWTProvider } from "../../../src/providers/JWTProvider";

const secret = "4s5dad56d5as4as4d6";

test("should generate token and not return error", () => {
  const jWTProvider = new JWTProvider();
  const obj = { name: "Joao da Silva" };

  expect(async () => {
    await jWTProvider.sign(obj, secret);
  }).not.toThrowError();
});

test("should validate token and not return error", async () => {
  const jWTProvider = new JWTProvider();
  const obj = { name: "Joao da Silva" };
  const token = await jWTProvider.sign(obj, secret);

  expect(async () => {
    await jWTProvider.verify(token, secret);
  }).not.toThrowError();
});
