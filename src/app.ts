import { Application } from "express";

class App {
  constructor(private httpProvider: Application) {}

  ApplyMiddleware(middleware: any): void {
    this.httpProvider.use(middleware);
  }

  Startup(): Application {
    return this.httpProvider;
  }
}

export { App };
