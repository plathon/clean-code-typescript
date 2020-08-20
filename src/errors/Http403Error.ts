import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http403Error extends BaseError {
  constructor(description = "Forbidden") {
    super("FORBIDDEN", HttpStatusCode.FORBIDDEN, description, true);
  }
}
