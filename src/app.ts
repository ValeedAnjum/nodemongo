import express, { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHanlder";
const app = express();
app.use(express.json());

app.use("/", exampleRoute);

app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);
mongoose.set("strictQuery", true);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect database");
  });
