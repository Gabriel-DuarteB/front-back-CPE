import express from "express";
import routes from "./src/routes.js";

const app = express();

app.use(express.json());
app.use(routes);

console.log("App.js carregado com sucesso!");

export default app;



