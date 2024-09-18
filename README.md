# Nome do projeto

<img src="imagem.png" alt="Pagina inicial">
<img src="imagem.png" alt="Página de pesquisa">
<img src="imagem.png" alt="Página de favoritos">

> Esse é um projeto de um teste de estágio para o time de desenvolvimento do Coco Bambu. O projeto consiste em um aplicativo onde seja possível pesquisar por livros da Google Books API
> Nele, você pode adiiconar um livro aos favoritos, adicionar uma avaliação, uma nota pessoal e tags, e também há a possibilidade de filtrar por livros favoritados por meio das tags. 

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do `<django / angular / docker>`
- Você tem uma máquina `<Windows / Linux / Mac>`.

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
<cd book-favorite-frontend>
```
```
<ng serve>
```
Após isso, inicie um conteiner Docker com uma instancia MySQL (Ou qualquer outra de sua preferência, e não se esqueça de 
modificar os dados do banco de dados no settings.py)

```
<docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root_password -e MYSQL_DATABASE=book_favorites_db -e MYSQL_USER=test_user -e MYSQL_PASSWORD=test_password -p 3306:3306 -d mysql:8.0>
```

Logo após, navegue até book_favorite_back-end faça as migrações do Django e inicie o servidor do back-end.

```
<python manage.py migrate>
```
```
<python manage.py runserver>
```

Adicione comandos de execução e exemplos que você acha que os usuários acharão úteis. Forneça uma referência de opções para pontos de bônus!

## 📫 Contribuindo para <nome_do_projeto>

Para contribuir com <nome_do_projeto>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#" title="defina o título do link">
        <img src="https://avatars3.githubusercontent.com/u/31936044" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Iuri Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#" title="defina o título do link">
        <img src="https://s2.glbimg.com/FUcw2usZfSTL6yCCGj3L3v3SpJ8=/smart/e.glbimg.com/og/ed/f/original/2019/04/25/zuckerberg_podcast.jpg" width="100px;" alt="Foto do Mark Zuckerberg"/><br>
        <sub>
          <b>Mark Zuckerberg</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#" title="defina o título do link">
        <img src="https://miro.medium.com/max/360/0*1SkS3mSorArvY9kS.jpg" width="100px;" alt="Foto do Steve Jobs"/><br>
        <sub>
          <b>Steve Jobs</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
