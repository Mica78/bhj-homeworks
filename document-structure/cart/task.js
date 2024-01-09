const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

const addProduct = function() {
    for (let i = 0; i < products.length; i++) {
        products[i].addEventListener('click', (e) =>{
            let dec = products[i].querySelector('.product__quantity-control_dec');
            let inc = products[i].querySelector('.product__quantity-control_inc');
            let value = products[i].querySelector('.product__quantity-value');
            let id = products[i].dataset.id;
            let imageSrc = products[i].querySelector('img').src;
            const htmlExp = `<div class="cart__product" data-id="${id}">
                            <img class="cart__product-image" src="${imageSrc}">
                            <div class="cart__product-count">${value.textContent}</div>
                            <button class="product__add" style="position: absolute; left: 0px; right: 0px; bottom: -15px;">Удалить</button>`
            let isInCart = false;
            if(e.target === inc) {
                value.textContent = Number(value.textContent) + 1;
            } else if(e.target === dec) {
                value.textContent = Number(value.textContent) > 1 ? Number(value.textContent) - 1 : value.textContent;
            };
            if (e.target.className === 'product__add') {
                const cards = Array.from(cartProducts.children);
                const productInCard = cards.find((cart) => {
                    if (cart.dataset.id === id) {
                        return cart;
                    };
                });
                if (productInCard) {
                    const cartCount = productInCard.querySelector('.cart__product-count');
                    cartCount.textContent = Number(cartCount.textContent) + Number(value.textContent);
                } else {
                    cartProducts.insertAdjacentHTML('beforeEnd', htmlExp);
                };
            };
        });
    };
};

const deleteProduct = function() {
    let deleteBtn = document.querySelectorAll('button');
    for (btn of deleteBtn) {
        btn.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });
    };
};

document.addEventListener('DOMContentLoaded', () => {
    addProduct();
});

const observer = new MutationObserver(() => {
    deleteProduct();
});

observer.observe(cartProducts, {childList: true,});
