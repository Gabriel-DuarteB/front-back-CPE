import { Router } from "express";
import UsuarioController from "./Controllers/UsuarioController.js"; // Certifique-se de usar .js

const rotas = Router();

rotas.post('/usuarios', UsuarioController.create);

export default rotas;  // Usando export default

