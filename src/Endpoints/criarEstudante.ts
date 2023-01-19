import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode=400
    const { nome, email, data_nasc, turma_id} = req.body;
    const id: string = Date.now() + Math.random().toString()
    try{
        
        if (!nome || !email || !data_nasc || !turma_id) {
            throw new Error("Dados inválidos");
          }
          await connection("Estudante").insert({
            id,
            nome,
            email,
            data_nasc,
            turma_id
          }) 
          res.status(200).send("Estudante criado com sucesso")

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}
