import bodyparser from "body-parser";
import morgan from "morgan";
import express from "express";
import router from "./routes.mjs";



const app = express();
const port = 3011;


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("morgan"));
app.use(router);
app.listen(port, () => {
  console.log(`server listen at ${port}`);
});
