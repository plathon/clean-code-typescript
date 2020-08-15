import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(201).json({ response: "ok" });
});

app.listen(3000);
