import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';

export async function createAluno(req: Request, res: Response) {
	//res.send('Ok post category');
	const {nome, sobrenome, email, datanascimento, matricula} = req.body;
	const aluno = await Aluno.create({nome, sobrenome, email, datanascimento, matricula});
	res.json(aluno);
}