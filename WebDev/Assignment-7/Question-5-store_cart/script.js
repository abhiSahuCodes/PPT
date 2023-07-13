const productContainer = document.querySelector('.productList');
const cartButton = document.querySelector('.cartButton');
const closeCartButton = document.querySelector('.closeCartButton');
const cartModal = document.querySelector('.cart-modal');
const cartItemsContainer = document.querySelector('.cart-items');
const cart = [];

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
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  const productImage = document.createElement('div');
  productImage.classList.add('product-image');
  const productImg = document.createElement('img');
  productImg.classList.add('productImg');
  productImg.src = product.image;
  productImg.alt = product.title;
  productImage.appendChild(productImg);

  const productDetails = document.createElement('div');
  productDetails.classList.add('product-details');

  const title = document.createElement('p');
  title.classList.add('p-name');
  title.textContent = product.title;
  productDetails.appendChild(title);

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = `Price: $${product.price}`;
  productDetails.appendChild(price);

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('addToCart-button');
  addToCartButton.textContent = 'Add to Cart';
  productDetails.appendChild(addToCartButton);

  productDiv.appendChild(productImage);
  productDiv.appendChild(productDetails);

  productContainer.appendChild(productDiv);

  // Event listener for Add to Cart button
  addToCartButton.addEventListener('click', () => {
    addToCart(product);
    cartButton.style.backgroundColor = 'green'
    alert('Product has been added to your cart')
  });
};

const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image, 
        quantity: 1,
      };
      cart.push(newProduct);
    }
  
    renderCart();
  };
  

const renderCart = () => {
    cartItemsContainer.innerHTML = '';
  
    if (cart.length === 0) {
      const emptyCartMsg = document.createElement('p');
      emptyCartMsg.textContent = 'Your cart is empty.';
      cartItemsContainer.appendChild(emptyCartMsg);
    } else {
      cart.forEach((product) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        const productImage = document.createElement('img');
        productImage.classList.add('cart-item-image');
        productImage.src = product.image;
        productImage.alt = product.title;
        cartItem.appendChild(productImage);
  
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('cart-item-details');
  
        const title = document.createElement('p');
        title.classList.add('cart-item-title');
        title.textContent = product.title;
        itemDetails.appendChild(title);
  
        const price = document.createElement('p');
        price.classList.add('cart-item-price');
        price.textContent = `$${product.price}`;
        itemDetails.appendChild(price);
  
        const quantity = document.createElement('p');
        quantity.classList.add('cart-item-quantity');
        quantity.textContent = `Quantity: ${product.quantity}`;
        itemDetails.appendChild(quantity);
  
        cartItem.appendChild(itemDetails);
  
        cartItemsContainer.appendChild(cartItem);
      });
    }
  };
  

// Event listener for Cart button click
cartButton.addEventListener('click', () => {
  cartModal.style.display = 'block';
  renderCart();
});

// Event listener for Close Cart button click
closeCartButton.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

fetchProducts();
