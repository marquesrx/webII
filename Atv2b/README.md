# App Food
### Preparação do ambiente de desenvolvimento

 - [ ] `npm i -g yarn`
 - [ ] `yarn init -y`
 - [ ] `yarn add -D typescript`
 Inicializa o Typescript
 - [ ] `yarn tsc`
 Inicializa o arquivo de configurações
 - [ ] `yarn tsc --init`
Criar a pasta src
 - [ ] `yarn tsc`
  Compila e cria os arquivos .js na mesma raiz, alterar o outDir no tsconfig altero para a pasta de saída dist.
 - [ ] `node index.js`
  Inicializa o Git e adicionamso o .gitignore e adicionamso as pastas para não serem adicionadas
 - [ ] `git init`
Instalar o eslint e editorconfig, para manter um padrão de codificação
 - [ ] Clicar botao direito e Generate .editorconfig
 - [ ] `npm init @eslint/config`
	 - [ ] style
	 - [ ] esm
	 - [ ] none
	 - [ ] Yes
	 - [ ] node
	 - [ ] prompt
	 - [ ] JSON
	 - [ ] tab
	 - [ ] single
	 - [ ] unix
	 - [ ] Yes
	 - [ ] Yes
	 - [ ] yarn
 - [ ] `yarn add express`
 Da erro na tipagem ai pprecisamos instalar o types/express
 - [ ] `yarn add -D @types/express`
Instalar as ferramentas para rodar o servidor com as alterações
 - [ ] `yarn add -D ts-node `
 - [ ] `npm i --save-dev -D nodemon`
