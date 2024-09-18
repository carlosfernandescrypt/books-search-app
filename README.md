# Nome do projeto

<img src="https://github.com/carlosfernandescrypt/books-search-app/blob/main/imgs/inicial.png" alt="Pagina inicial">
<img src="https://github.com/carlosfernandescrypt/books-search-app/blob/main/imgs/pesquisa.png" alt="Página de pesquisa">
<img src="https://github.com/carlosfernandescrypt/books-search-app/blob/main/imgs/favoritos.png" alt="Página de favoritos">

> Esse é um projeto de um teste de estágio para o time de desenvolvimento do Coco Bambu. O projeto consiste em um aplicativo onde seja possível pesquisar por livros da Google Books API.
> Nele, você pode adiiconar um livro aos favoritos, adicionar uma avaliação, uma nota pessoal e tags, e também há a possibilidade de filtrar por livros favoritados por meio das tags.

Tecnologias Utilizadas:
`Django
Python
Angular
TypeScript
Docker
MySQL`

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou o concurrently para rodar os scripts automatizados `npm install concurrently`
- Você instalou as versões mais recentes do `django / angular / docker`
- Você tem uma máquina `Windows / Linux / Mac`.

## 🚀 Instalando o projeto

Para clonar o repositorio, navegue até a pasta book-search-app e siga estas etapas:

No terminal:

```
npm run start 
```
Aqui ele vai:
Iniciar o banco de dados MySQL via Docker.
Aplicar as migrações no Django e iniciar o backend.
Iniciar o servidor do frontend (Angular).


## ☕ Em caso de algum erro com o npm run start, tente rodar os projeto manualmente:

Navegue até book-favorite-frontend e inicie o servidor do front-end (Angular)

```
cd book-favorite-frontend
```
```
ng serve
```
Após isso, inicie um conteiner Docker com uma instancia MySQL (Ou qualquer outra de sua preferência, e não se esqueça de 
modificar os dados do banco de dados no settings.py)

```
docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root_password -e MYSQL_DATABASE=book_favorites_db -e MYSQL_USER=test_user -e MYSQL_PASSWORD=test_password -p 3306:3306 -d mysql:8.0
```

Logo após, navegue até book_favorite_back-end faça as migrações do Django e inicie o servidor do back-end.

```
python manage.py migrate
```
```
python manage.py runserver
```


## 📫 Contribuindo para o projeto

Para contribuir com books search, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Sugestões

Por mais que possa parecer um teste "simples", para mim foi um pouco cansativo, ainda mais por se tratar de uma vaga mais entry level que é um estágio. Entendo que por ser uma área de muita concorrência,
os filtros devem ser mais rígidos, porém, acredito que muitas pessoas não vão chegar nem a mandar o projeto, perdendo assim uma baita de uma oportunidade, pois nunca tiveram contato com algumas das tecnologias que foram exigidas.
Porém, posso estar totalmente enganado, não sei como é o critério de seleção. Mas boa sorte para todos nós! <3
