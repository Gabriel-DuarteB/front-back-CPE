import mongoose from "mongoose";


const Schema = mongoose.Schema;


const UsuarioSchema = new Schema ({
    nome : String,
    cargo : String,
    email : String, 
    senha : String,
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema); 

export default UsuarioModel; 


