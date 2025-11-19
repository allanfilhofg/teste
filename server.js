// server.js - VERSÃO CORRIGIDA
require("dotenv").config();
console.log('🔍 Iniciando servidor...');

// Testar database ANTES de tudo
const database = require('./config/Database');
console.log('📦 Database carregado');

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const RelatorioRoutes = require("./Routes/RelatorioRoutes");
app.use("/relatorio", RelatorioRoutes);

// Rotas
const AuthRoutes = require("./Routes/AuthRoutes");
const AlunoRoutes = require("./Routes/AlunoRoutes");
const InstrutorRoutes = require("./Routes/InstrutorRoutes");
const PlanoTreinoRoutes = require("./Routes/PlanoTreinoRoutes");
const FrequenciaRoutes = require("./Routes/FrequenciaRoutes");
const TesteRoutes = require("./Routes/TesteRoutes");
const GerenteRoutes = require("./Routes/GerenteRoutes");

console.log("📌 Carregando rotas...");

// Prefixos
app.use("/auth", AuthRoutes);
app.use("/aluno", AlunoRoutes);
app.use("/instrutor", InstrutorRoutes);
app.use("/plano", PlanoTreinoRoutes);
app.use("/frequencia", FrequenciaRoutes);
app.use("/teste", TesteRoutes);
app.use("/gerente", GerenteRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 API rodando na porta ${PORT}`));