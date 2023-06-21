document.addEventListener('DOMContentLoaded', () => {
  
  //.......YEAR_footer_exercise

    document.querySelector(".year").innerHTML = new Date().getFullYear();


//.......LOADING_homepage_exercise

window.addEventListener("load", () => {
    console.log("loading_teste")
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.remove();
    },3000)
});

//.......ObterCATEGORIAS_homepage_exercise

function loadCategorias() {
  console.log('categorias_homepage_teste')
    return fetch("https://fakestoreapi.com/products/categories")
       .then(response => response.json())
   };
   
  
     const categoriasElements = document.querySelectorAll(".categorias");
    loadCategorias()
      .then(categorias => {
        for (let k = 0; k < categoriasElements.length; k++) {
          categoriasElements[k].textContent = categorias[k];
        }
       });

       const categoriasElementsMain = document.querySelectorAll(".categorias-main");
    loadCategorias()
      .then(categorias => {
        for (let k = 0; k < categoriasElementsMain.length; k++) {
          categoriasElementsMain[k].textContent = categorias[k];
        }
       });
  
 //.......NEWSLETTER_homepage_exercise


  document.getElementById("newsletter").addEventListener("submit", (event) => {
    event.preventDefault();
    
    fetch("https://fakenewsletter.com", { method: "POST" })
      .then((response) => {
        if (response.ok) {
          alert("Subscrito à newsletter");
          event.target.reset();
        } else {
          console.log("Erro na subscrição");
        }
      })
      .catch((error) => {
        alert("Não é possível subscrever à newsletter");
      });
  });

});











