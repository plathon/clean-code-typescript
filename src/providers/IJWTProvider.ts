export interface IJWTProvider {
  sign(payload: object, secret: string): Promise<string>;
  verify(token: string, secret: string): Promise<string | object>;
}
