import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http500Error extends BaseError {
  constructor(description = "Internal Server Error") {
    super(
      "INTERNAL SERVER ERROR",
      HttpStatusCode.INTERNAL_SERVER,
      description,
      true
    );
  }
}
