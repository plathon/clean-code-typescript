import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http400Error extends BaseError {
  constructor(description = "bad request") {
    super("BAD REQUEST", HttpStatusCode.BAD_REQUEST, description, true);
  }
}
