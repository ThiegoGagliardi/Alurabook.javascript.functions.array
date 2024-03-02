const documentLivros         = document.getElementById('livros');
const totalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaPagina(livros, categoria)
{
    documentLivros.innerHTML = '';
    totalLivrosDisponiveis.innerHTML = '';
    livros.forEach(livro => {
        documentLivros.innerHTML += montaHmtlLivro(livro);
    });

    if (categoria == 'disponivel'){
      exibirValorTotalLivrosDisponiveis();
    }
}

function montaHmtlLivro(livro)
{
    return `<div class="livro">
    <img class="livro__imagens ${livro.quantidade<=0?' indisponivel':''}" src=${livro.imagem} alt=${livro.alt}
        Construa aplicações incríveis" />
    <h2 class="livro__titulo">
      ${livro.titulo}
    </h2>
    <p class="livro__descricao">${livro.autor}</p>
    <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
    <div class="tags">
      <span class="tag">${livro.categoria}</span>
    </div>
  </div>`;
}

function exibirValorTotalLivrosDisponiveis(){
  totalLivrosDisponiveis.innerHTML = `  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${calcularTotalLivros()}</span></p>
</div>`  
}

function calcularTotalLivros()
{
  const livros =  filtrarPorQuantidade();

  const totalLivros = livros.reduce((total,livro) => total+livro.preco, 0);

  return totalLivros.toFixed(2);

}