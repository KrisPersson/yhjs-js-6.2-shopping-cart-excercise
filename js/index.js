// SHOPPING CART JS-EXCERCISE


// ---------------- LEVEL 1, 2, och 3 ----------------

let shoppingCart = []; // Definerar varukorgen när sidan först laddas.
let products = document.getElementsByTagName('button'); // Samlar alla produkter på sidan när den först laddas.

// Öppnar eller stänger varukorgen när "Cart" klickas.
document.getElementById('open-cart').addEventListener('click', function() { 
    document.getElementById('cart').classList.toggle('hide'); 
});


function updateCart() {
    listProductsInCart(); // Rendera varukorgens innehåll till DOMen.
    document.getElementById('productsInCart').innerHTML = shoppingCart.length; // Uppdaterar räknaren som visar antalet produkter i varukorgen.
}

function listProductsInCart() {
    let cartProducts = ''; // definerar cartProducts.

    for(let i = 0; i < shoppingCart.length; i++) { //  För varje produkt som finns i varukorgen, 
        cartProducts += `<li><span class="product-title">Titel: </span>${shoppingCart[i]} <button class="delete-btn" onclick="removeProduct('${shoppingCart[i]}')">x</button></li>`; // lägg till ett li-element i cartProducts
    }
    document.getElementById('products').innerHTML = cartProducts; // Uppdatera DOMen med den nya varukorgen baserat på cartProducts.

    const allDeleteBtns = document.querySelectorAll('.delete-btn')
}

function removeProduct(product) {                   // Funktionen som anropas när man klickar på att ta bort en produkt. Produkten har med sig samma argument som används som titel när den renderades.
    for (let i = 0; i < shoppingCart.length; i++) { // För varje produkt i varukorgen,
        if (shoppingCart[i] === product) {          // om den produktens namn stämmer överens med namnet i argumentet (product),
            shoppingCart.splice(i, 1)               // ta bort den ur varukorgens array,
        }
    }
    updateCart()                                    // och uppdatera varukorgen.
}

for(let i = 0; i < products.length; i++) { // Lägger till en event-listener på varje produkts knapp.
    products[i].addEventListener('click', function(event) {
        let product = event.target.parentNode.getAttribute('data-product'); // När man trycker på knappen så defineras produkten (let product) som klickades (event.target.parentNode).
        if (shoppingCart.indexOf(product) === -1) { // Om sedan den produkten inte redan finns i varukorgen,
            shoppingCart.push(product); //  så pushas den produkten till shoppingCart,
            updateCart();               // och slutligen uppdateras varukorgen.
        } else { // Om produkten redan finns i varukorgen när man klickar på "Add to cart",
            alert('This product has already been added to the shopping cart.') // så visas detta meddelande istället.
        }
    });
}

// Lista alla produkter i varukorgen (om några alls) när sidan först laddas.
listProductsInCart();