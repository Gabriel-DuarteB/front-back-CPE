// src/Controllers/UsuarioController.js

// src/Controllers/UsuarioController.js
import UsuarioModel from "../Models/UsuarioModel.js";



class UsuarioController {

  async create(req, res) {
    try {
      const usuario = await UsuarioModel.create(req.body); // 'await' exige 'async' na função
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  read(req, res) {
    // Implementar lógica de leitura (read)
  }

  update(req, res) {
    // Implementar lógica de atualização (update)
  }

  delete(req, res) {
    // Implementar lógica de exclusão (delete)
  }

}

export default new UsuarioController(); // Exporta a instância do controlador
