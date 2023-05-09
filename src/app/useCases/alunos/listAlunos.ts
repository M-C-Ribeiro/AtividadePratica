import { Request, Response } from "express";
import { Aluno } from "../../models/Aluno";

export async function listAlunos(req: Request, res: Response) {
    const alunos = await Aluno.find(); // recebe todos os alunos cadastrados

    res.json(alunos); // envia todos os alunos encontrado como resposta 
}