import express, { Request, Response, json } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/UserRoute";

dotenv.config();
const app = express();

app.use(json());
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "working",
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening");
});
