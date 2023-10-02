const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMobilMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navProductDetail = document.querySelector('.nabvar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleNavBarEmail);
navMobilMenu.addEventListener('click',toggleMobilMenu);
navProductDetail.addEventListener('click',toggleshoppingCartContainer);
productDetailCloseIcon.addEventListener('click',productDetailClose);

function toggleNavBarEmail() {
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu() {
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail(event) {
    productDetail.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function productDetailClose(event) {
    productDetail.classList.add('inactive');
}

const productList = []
productList.push({
    name: 'Balon',
    price: 120.00,
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e-AHmIwIQIzStTSqhfGwCwHaDZ%26pid%3DApi&f=1&ipt=eb4b6ebc1d975ce2da4101691839a8ddb6f562f704dd8a5ed5a4150de7a43f5c&ipo=images'
});
productList.push({
    name: 'Guantes',
    price: 80.00,
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e-AHmIwIQIzStTSqhfGwCwHaDZ%26pid%3DApi&f=1&ipt=eb4b6ebc1d975ce2da4101691839a8ddb6f562f704dd8a5ed5a4150de7a43f5c&ipo=images'
});
productList.push({
    name: 'Pesa',
    price: 90.00,
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.e-AHmIwIQIzStTSqhfGwCwHaDZ%26pid%3DApi&f=1&ipt=eb4b6ebc1d975ce2da4101691839a8ddb6f562f704dd8a5ed5a4150de7a43f5c&ipo=images'
});

function renderProductos(data){
    for(let product of data) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.append(productCard);
    }
}

renderProductos(productList);
