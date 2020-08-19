import express, { Request, Response } from "express";
import "reflect-metadata";
import morgan from "morgan";
import { App } from "./app";
import { routes } from "./routes";

const httpProvider = express();
const app = new App(httpProvider);

app.ApplyMiddleware(express.json());
app.ApplyMiddleware(routes);
app.ApplyMiddleware(morgan("combined"));

app.Startup().listen(3000);
