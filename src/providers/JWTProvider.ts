import { IJWTProvider } from "./IJWTProvider";
import { sign, verify } from "jsonwebtoken";

export class JWTProvider implements IJWTProvider {
  async sign(payload: object, secret: string): Promise<string> {
    return new Promise((resolve, reject) => {
      sign(payload, secret, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  }
  async verify(token: string, secret: string): Promise<string | object> {
    return new Promise((resolve, reject) => {
      verify(token, secret, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });
  }
}
