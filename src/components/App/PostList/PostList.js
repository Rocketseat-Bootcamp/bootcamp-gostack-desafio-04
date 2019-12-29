import React, { Component } from "react";
import "./PostList.css";
import Post from "./Post/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
            },
            content:
              "É foi um ano aonde tudo aconteceu...Talvez o ano em que eu mais tenha chorado e também o ano em que eu mais amadureci!Agradeço a Deus pelo emprego que me concedeu, aonde eu sou realizada.Nunca trabalhei em um lugar tão humano! Esse ano aconteceu muita coisa triste na minha vida,mas que tiveram um aprendizado incrível. Deus me mostrou quem era amigo de verdade e quem não passava de fingimento.Quando entraram na minha casa e levaram as nossas coisas eu pensei que fosse a pior coisa que poderia ter me acontecido,mas não foi... Deus recolheu uma pessoa que eu amo tanto, levou pra perto dele e isso sim, foi algo horrível. Perder pessoas que amamos é algo destruidor, não desejo a ninguém. No meio de tanta coisa triste, eu tive também momentos de muita felicidade, Deus colocou pessoas incríveis no meu caminho. A vida é assim , hoje tenho orgulho da pessoa que eu estou me tornando, crescendo, amadurecendo e me tornando mulher. Então mais um ciclo que se fecha, vamos para 2020 e que seja um ano próspero e feliz!!"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
            },
            content: "Claro que sim.... basta se increver em uma das vagas."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
            },
            content:
              "É foi um ano aonde tudo aconteceu...Talvez o ano em que eu mais tenha chorado e também o ano em que eu mais amadureci!Agradeço a Deus pelo emprego que me concedeu, aonde eu sou realizada.Nunca trabalhei em um lugar tão humano! Esse ano aconteceu muita coisa triste na minha vida,mas que tiveram um aprendizado incrível. Deus me mostrou quem era amigo de verdade e quem não passava de fingimento.Quando entraram na minha casa e levaram as nossas coisas eu pensei que fosse a pior coisa que poderia ter me acontecido,mas não foi... Deus recolheu uma pessoa que eu amo tanto, levou pra perto dele e isso sim, foi algo horrível. Perder pessoas que amamos é algo destruidor, não desejo a ninguém. No meio de tanta coisa triste, eu tive também momentos de muita felicidade, Deus colocou pessoas incríveis no meu caminho. A vida é assim , hoje tenho orgulho da pessoa que eu estou me tornando, crescendo, amadurecendo e me tornando mulher. Então mais um ciclo que se fecha, vamos para 2020 e que seja um ano próspero e feliz!!"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars3.githubusercontent.com/u/14297064?s=400&u=ff5269d19acfcdbec6fc10807df2f1f894b5b234&v=4"
            },
            content: "Claro que sim.... basta se increver em uma das vagas."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="post-list-component">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
