import app from "./App.js"; // Import usando ESModules
import Loaders from "./Loaders/index.js"; // Também em ESModules

Loaders.start();

app.listen(8000, () => console.log("Servidor Rodando"));
