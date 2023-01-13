import express from "express"

import cors from 'cors'

import dotenv from "dotenv";
import { ping } from "./Endpoints/ping";
import { criarEstudante } from "./Endpoints/criarEstudante";
import { criarTurma } from "./Endpoints/criarTurma";

dotenv.config();

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


app.get("/ping",ping);

app.post("/criarEstudante", criarEstudante);

app.post("/criarTurma", criarTurma);


