import mongoose from "mongoose";

async function startDB() {
    await mongoose.connect('mongodb+srv://gabrielduartebm905:rZkKNB8UpblKl1ow@cursonodegd.qgt9v8e.mongodb.net/?retryWrites=true&w=majority&appName=cursoNodeGD');
}

export default startDB;
