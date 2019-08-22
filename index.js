"use strict";

const mongoose = require("mongoose");
const config = require("./config");
const app = require("./app");

mongoose.connect(
    config.db,
    {
        useMongoClient: true
    },
    (err, res) => {
        if (err) {
            return console.log(`Error al conectar a la base de datos: ${err}`);
        }
        console.log("Conexión a la base de datos establecida...");
        app.listen(config.port, "localhost", () => {
            console.log(
                `API REST Corriendo en http://localhost:${config.port}`
            );
        });
    }
);
