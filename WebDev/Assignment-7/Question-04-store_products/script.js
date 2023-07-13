const productContainer = document.querySelector('.productList');

const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);

        data.forEach((product) => {
            fetchProductDetails(product.id);
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchProductDetails = async (productId) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        console.log(data);

        createProductCard(data);
    } catch (error) {
        console.log(error);
    }
};

const createProductCard = (product) => {
    const productdiv = document.createElement('div')
    productdiv.classList.add('product')


    const productImage = document.createElement('div')
    productImage.classList.add('product-image')
    const productImg = document.createElement('img')
    productImg.classList.add('productImg')
    productImg.src = product.image
    productImg.alt = product.title
    productImage.appendChild(productImg)
   


    const productDetails = document.createElement('div')
    productDetails.classList.add('product-details')

    const title = document.createElement('p')
    title.classList.add('p-name')
    title.textContent = product.title
    productDetails.appendChild(title)

    const price = document.createElement('p')
    price.classList.add('price')
    price.textContent = `Price: $${product.price}`
    productDetails.appendChild(price)

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('addToCart-button');
    addToCartButton.textContent = 'Add to Cart';
    productDetails.appendChild(addToCartButton);

    productdiv.appendChild(productImage)
    productdiv.appendChild(productDetails)

    productContainer.appendChild(productdiv)
};

fetchProducts();
