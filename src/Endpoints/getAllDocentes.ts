import { Request, Response } from "express"
import { connection } from "../DataBase/connection";


export const getAllDocentes = async (req: Request, res: Response) => {
    let errorCode=400
    
    try{
        const docentes = await connection.select('*').from("Docente")
          res.status(200).send(docentes)

    } catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
}
