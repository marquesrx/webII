import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';

export async function listAluno(req: Request, res: Response) {
	const alunos = await Aluno.find();

	res.json(alunos);
}