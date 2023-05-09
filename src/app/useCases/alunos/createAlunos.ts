import { Request, Response } from "express";
import { Aluno } from "../../models/Aluno";

export async function createAlunos(req:Request, res: Response) {
    const { id, nome, sobrenome, email, datanascimento, matricula } = req.body; // recebe as informações do post
    const aluno = await Aluno.create({ // configura em um json
        id,
        nome,
        sobrenome,
        email,
        datanascimento,
        matricula
    })

    res.json(aluno); // envia o aluno informado como resposta 
}