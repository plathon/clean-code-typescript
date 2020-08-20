import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http401Error extends BaseError {
  constructor(description = "Unauthorized") {
    super("UNAUTHORIZED", HttpStatusCode.UNAUTHORIZED, description, true);
  }
}
