import { Application, RequestHandler } from "express";

class App {
  constructor(private httpProvider: Application) {}

  ApplyMiddleware(middleware: RequestHandler): void {
    this.httpProvider.use(middleware);
  }

  Startup(): Application {
    return this.httpProvider;
  }
}

export { App };
