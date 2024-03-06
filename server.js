const express = require("express");
const path = require("path");

const app = express();

const port = 5000;

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

// Configurar o middleware para servir arquivos estáticos do diretório 'public'
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  // Envia o arquivo HTML como resposta
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
