import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const getAllTurmas = async (req: Request, res: Response) => {
    let errorCode=400
    
    try{
        const turmas = await connection.select('*').from("Turma")
          res.status(200).send(turmas)

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}
