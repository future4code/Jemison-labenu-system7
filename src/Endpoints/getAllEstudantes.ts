import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const getAllEstudantes = async (req: Request, res: Response) => {
    let errorCode=400
    
    try{
        const estudantes = await connection.select('*').from("Estudante")
          res.status(200).send(estudantes)

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}
