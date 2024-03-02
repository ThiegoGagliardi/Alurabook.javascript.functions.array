const botoes = document.querySelectorAll('.btn');

botoes.forEach(b => b.addEventListener('click',filtrarLivro));

function filtrarLivro(){

    const btn = document.getElementById(this.id);
    const categoria = btn.value;
    var livrosFiltrados;

    if (categoria == 'disponivel') {

        livrosFiltrados = filtrarPorQuantidade(livrosFiltrados);
    } else{
        livrosFiltrados = FiltrarPorCategoria(categoria);
    }

    exibirLivrosNaPagina(livrosFiltrados, categoria);
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorQuantidade(livrosFiltrados) {
    livrosFiltrados = livros.filter(livro => livro.quantidade > 0);
    return livrosFiltrados;
}

