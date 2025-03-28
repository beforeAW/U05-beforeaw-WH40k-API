import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./database/db";
import mainRoutes from "./routes/mainRoutes";
import cors from "cors";

dotenv.config();
connectDB();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 

app.get("/", (req: Request, res: Response) => {
  res.send("WH40k API");
});

app.use("/api", mainRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
