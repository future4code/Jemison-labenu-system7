import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const criarDocente = async (req: Request, res: Response) => {
    let errorCode=400
    const { nome, email, data_nasc, turma_id} = req.body;
    const id: string = Date.now() + Math.random().toString()
    try{
        
        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Dados inválidos");
          }
          await connection("Docente").insert({
            id,
            nome,
            email,
            data_nasc,
            turma_id
          }) 
          res.status(200).send("Docente criado com sucesso")

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}