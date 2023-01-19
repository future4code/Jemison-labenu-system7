import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const criarTurma = async (req: Request, res: Response) => {
    let errorCode=400
    
    try{
        const id = Date.now().toString();
    const nome = req.body.nome;
    const modulo = req.body.modulo;
        
        if (!id || !nome || !modulo) {
            throw new Error("Dados inválidos");
          }
          await connection("Turma").insert({
            id,
            nome,
            modulo
          }) 
          res.status(200).send("Turma criada com sucesso")

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}
