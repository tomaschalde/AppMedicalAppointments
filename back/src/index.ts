import app from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize().then((res) => {
    console.log("Se ha inicializado la conexión a la BD");
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})