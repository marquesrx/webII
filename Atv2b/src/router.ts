import { Router } from 'express';
import { listAluno } from './app/useCases/aluno/listAluno';
import { createAluno } from './app/useCases/aluno/createAluno';

export const router = Router();

//Listar aluno
router.get('/alunos', listAluno);

//Criar aluno
router.post('/alunos', createAluno);