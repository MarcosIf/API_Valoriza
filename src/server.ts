import express, { request, response } from "express";

const app = express();
app.get("/test", (request, response) => {
   return response.send("Olá Mundo");
});

app.post("/test-post", (request, response) =>{

    return response.send("Olá mundo - POST");
});

app.listen(3000, () => console.log("Servidor rodando"));
