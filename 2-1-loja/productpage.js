

//escrever o nome do product fazer Search e aparece os produtos só com esse nome

//A API FUNCIONA MUITO MAL, MUITAS DAS VEZES NÃO APARECE!!!!!


const categoria = 'jewelery';
const endpoint = `https://fakestoreapi.com/products/category/${categoria}`;
let allProducts = [];
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

  function displayProducts(products) {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';
  products.forEach(produto => {
    const produtoId = produto.id;
    const nome = produto.title;
    const preco = produto.price;
    const imagemUrl = produto.image;
   
    const produtoLink = document.createElement('a');
       produtoLink.href = `sofa-productpage.html?produtoId=${produtoId}`;
    produtoLink.classList.add('produto-link');
   
    const produtoImagem = document.createElement('img');
       produtoImagem.src = imagemUrl;
      produtoImagem.alt = nome;
       produtoImagem.classList.add('produto-imagem');
   
    const produtoNome = document.createElement('h3');
    produtoNome.textContent = nome;
   
 produtoNome.classList.add('produto-nome');

 const produtoPreco = document.createElement('span');
      produtoPreco.textContent = `Preço: $${preco}`;
     produtoPreco.classList.add('produto-preco');
      produtoLink.appendChild(produtoImagem);
      produtoLink.appendChild(produtoNome);
      produtoLink.appendChild(produtoPreco);
      gridContainer.appendChild(produtoLink);
  });
}

const searchInput = document.getElementById('search-input');

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProducts = allProducts.filter(product => {

        const productName = product.title.toLowerCase();

        const productDescription = product.description.toLowerCase();
    return productName.includes(searchTerm) || productDescription.includes(searchTerm);
  });
  displayProducts(filteredProducts);
});