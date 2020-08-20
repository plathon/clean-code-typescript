import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class Http404Error extends BaseError {
  constructor(description = "Not Found") {
    super("NOT FOUND", HttpStatusCode.NOT_FOUND, description, true);
  }
}
