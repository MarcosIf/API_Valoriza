import express, { request, response } from "express";
import "reflect-metadata";
import "./database";

const app = express();


app.listen(3000, () => console.log("Servidor rodando"));
