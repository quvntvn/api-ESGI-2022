import bodyparser from "body-parser";
import morgan from "morgan";
import express from "express";
import router from "./routes.mjs";
import swaggerUI from "swagger-ui-express"
import docs from "./docs/index.mjs"



const app = express();
const port = 3011;


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan("morgan"));
app.use(router);
app.listen(port, () => {
  console.log(`server listen at ${port}`);
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
