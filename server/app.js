import express from "express";
import { chessRouter } from "./chess/Chess.js";
import { port } from "./config.js";
const app = express();

app.use(express.json());

app.use("/chess", chessRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});