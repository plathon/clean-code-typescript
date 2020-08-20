import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http502Error extends BaseError {
  constructor(description = "Bad Gateway") {
    super("BAD GATEWAY", HttpStatusCode.BAD_GATEWAY, description, true);
  }
}
