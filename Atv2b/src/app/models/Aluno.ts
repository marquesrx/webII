import {model, Schema } from 'mongoose';

export const Aluno = model('Aluno', new Schema({
	nome: {
		type: String,
		required: true,
	},
	sobrenome: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	datanascimento: {
		type: Date,
		required: true,
	},
	matricula: {
		type: Number,
		required: true,
	},
}));