import express, { Request, Response } from "express";
import "reflect-metadata";
import { App } from "./app";
import { routes } from "./routes";

const httpProvider = express();
const app = new App(httpProvider);

app.ApplyMiddleware(express.json());
app.ApplyMiddleware(routes);

app.Startup().listen(3000);
