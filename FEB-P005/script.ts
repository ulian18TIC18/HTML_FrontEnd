import $ from 'jquery';

class Noticia {
  titulo: string;
  link: string;

  constructor(titulo: string, link: string) {
    this.titulo = titulo;
    this.link = link;
  }
}

function buscarNoticias() {
  const urlNoticias = 'https://jokeapi.dev/joke/Any?type=single';
  
  $.ajax({
    url: urlNoticias,
    method: 'GET',
    success: (data: any) => {
      const noticia = new Noticia(data.joke, '');
      exibirNoticia(noticia);
    },
    error: (error: any) => {
      console.error('Erro ao buscar notícias:', error);
    }
  });
}

function exibirNoticia(noticia: Noticia) {
  const noticiasDiv = $('.quadradonoticias'); 
  
  const noticiaHtml = `
    <h3>NOTÍCIAS</h3>
    <p>${noticia.titulo}</p>
  `;
  
  noticiasDiv.html(noticiaHtml);
}

$(document).ready(() => {
  buscarNoticias();
});
