import express, { Request, Response } from "express";
import "reflect-metadata";
import morgan from "morgan";
import { App } from "./app";
import { routes } from "./routes";
import { ErrorHandler } from "./errors/ErrorHandler";

const httpProvider = express();
const app = new App(httpProvider);

app.ApplyMiddleware(express.json());
app.ApplyMiddleware(morgan("combined"));
app.ApplyMiddleware(routes);

const errorHandler = new ErrorHandler();
app.ApplyMiddleware(errorHandler.handle);

app.Startup().listen(3000);
