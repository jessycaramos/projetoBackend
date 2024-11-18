import express from "express";

const app = express();
app.listen (3000, () => {
    console.log("Servidor escutando...");
}); //A porta 300 é uma porta padrão

app.get("/api", (req, res) => {
    res.status(200) .send("Bem vindo à Rota inicial!");
});