
document.addEventListener('DOMContentLoaded', () => {


//................Obter produtos com o endpoint
  
  
         
let productOption = new XMLHttpRequest();
productOption.open('GET', 'https://fakestoreapi.com/products/6', true);
productOption.onreadystatechange = function() {
    if (productOption.readyState === 4 && productOption.status === 200) {

        let product = JSON.parse(productOption.responseText);
                 

document.getElementById('product-image').src = product.image;
document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-price').textContent = '$' + product.price;
document.getElementById('product-color').textContent = product.description;
document.getElementById('product-arm-style').textContent = product.category;
document.getElementById('product-rating').textContent = product.rating.rate;
document.getElementById('product-rating-count').textContent = product.rating.count;
}
};
productOption.send();



    //...............Botão add to cart


    
let addToCartButton = document.getElementById('add-cart-btn');
addToCartButton.addEventListener('click', function() {
    let productId = 1;
    let quantity = 1;
    let cartInfo = {
     userId: 6,
       date: new Date().toISOString().slice(0, 10),
    products: [{
    productId: productId, quantity: quantity
                }]};
            let cartProduct = new XMLHttpRequest();
            cartProduct.open('PUT', 'https://fakestoreapi.com/carts/7', true);
            cartProduct.setRequestHeader('Content-Type', 'application/json');
            cartProduct.onreadystatechange = function() {
                if (cartProduct.readyState === 4 && cartProduct.status === 200) {
                    console.log('Product added to cart!', cartInfo);
                }
            };
            cartProduct.send(JSON.stringify(cartInfo));
        });




    //.........Obter primeiras 3 categorias relacionadas ao produto -- fim da página


       
let productsRelated = new XMLHttpRequest();
 productsRelated.open('GET', 'https://fakestoreapi.com/products/category/jewelery', true);


 productsRelated.onreadystatechange = function() {
         if (productsRelated.readyState === 4 && productsRelated.status === 200) {
    let relatedProducts = JSON.parse(productsRelated.responseText);
     let relatedProductsGrid = document.getElementById('related-products-grid');
    
     relatedProducts.slice(0, 3).forEach(function(relatedProduct) {
        let productItem = document.createElement('div');
         productItem.classList.add('product-item');
        let productImage = document.createElement('img');
         productImage.src = relatedProduct.image;
        productImage.alt = relatedProduct.title;
        productItem.appendChild(productImage);

        let productTitle = document.createElement('h3');
        productTitle.textContent = relatedProduct.title;
        productItem.appendChild(productTitle);
        relatedProductsGrid.appendChild(productItem);
         });
        }
    };
            productsRelated.send();

        });





    




