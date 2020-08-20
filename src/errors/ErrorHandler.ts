import { Request, Response, NextFunction } from "express";
import { BaseError } from "./BaseError";
import { HttpStatusCode } from "./HttpStatusCode";

export class ErrorHandler {
  handle = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BaseError) {
      res.status(err.httpCode).send(err.message);
    } else {
      res
        .status(HttpStatusCode.INTERNAL_SERVER)
        .send("Could not process your request. Please try again later.");
    }
  };
}
