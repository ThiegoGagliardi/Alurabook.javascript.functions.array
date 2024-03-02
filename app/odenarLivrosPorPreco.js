const btnOrdenar = document.getElementById('btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', ordenarLivroPrecoDecrescente);

function ordenarLivroPrecoDecrescente(){

    const livrosOrdenadoMenorPreco = livros.sort( (livroA, livroB) => livroA.preco - livroB.preco);    
    exibirLivrosNaPagina(livrosOrdenadoMenorPreco);
}