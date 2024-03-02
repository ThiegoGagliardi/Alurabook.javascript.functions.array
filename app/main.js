var livros           = [];
const endPointAPI    = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivroAPI();

async function getBuscarLivroAPI(){

    const res = await fetch(endPointAPI);
    livros    = await res.json();
    
    exibirLivrosNaPagina(livros);
}
