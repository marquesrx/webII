
# Aplicação para listar alunos
## Preparação do ambiente de desenvolvimento

### Requisitos

Node 

Docker 

Insomnia

### Instalando dependências do projeto

Após clonar o projeto você precisa entrar na raiz do projeto e rodar o comando:

```
npm install
```

### Rodando a aplicação

O banco a ser usado na aplicação é o mongodb, ele precisa ser redirecionado pelo docker, para rodar o container com o banco mongo use o seguinte comando:
```
docker run --rm -d -p 27017:27017 mongo
```
O comando para rodar a aplicação em desenvolvimento na porta 3000:

```
npm run dev
```

## Testando a aplicação

Para testar a aplicação vamos usar o insomnia, você pode baixar ele no site: https://insomnia.rest/download

Vamos trabalhar com 2 rotas que estão na porta 3000 e no endereço http://localhost, lembrando que ambos podem ser alterados no arquivo src/index.ts assim como o endereço e porta do mongo, nesse endereço temos 2 rotas disponiveis para inserção e leitura do banco e elas são /alunos

A requisição montada fica assim:
```
http://localhost:3000/alunos
```

Lembrando que ambas as requisições trabalham no mesmo enreço, o que muda é o tipo de requisição, se é GET ou POST

Passos para realizar uma inserção pelo insomnia:

1. Abra a aplicação
2. Cole a url http://localhost:3000/alunos no campo de url
3. Selecione no campo do lado esquerdo o tipo de requisição a ser feita, que no caso é um GET
4. Clique em send e vizualize o resultado na aba ao lado

Passos para realizar uma requisição POST

1. Abra a aplicação
2. Cole a url http://localhost:3000/alunos no campo de url
3. Selecione no campo do lado esquerdo o tipo de requisição que no caso é um POST
4. Na aba a baixo selecione o corpo da requisição para JSON
5. Use o JSON a baixo como modelo para criar a requisição:

```
{
	"nome": "",
	"sobrenome": "",
	"email": "",
	"datanascimento": "",
	"matricula": ""
}
```
6. Clique em Send e vizualize a requisição ao lado

Lembrando que os dados salvos vão continuar gravados mesmo após a aplicação não estar mais de pé, pois é salva no banco, assim é possivél retornar ao estado anterior mesmo após reiniciar a mesma, tome cuidado quando rodar novamente o docker pois você pode sobrescrever a imagem ja criada e apagar o banco.
