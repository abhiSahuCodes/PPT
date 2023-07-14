import React, { useState, useEffect } from "react";
import "./App.css";

const FakeStore = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="container">
      <div className="navbar">
        <div className="logo">
          <p>Fake Store</p>
        </div>
        <div className="menu">
          <ul className="menuList">
            <li>Home</li>
            <li>User Guide</li>
          </ul>
        </div>
      </div>
      <div className="products-section">
        <h1>Products</h1>
        {error ? (
          <p className="error-message">Error: {error}</p>
        ) : (
          <div className="productList">
            {products.map((product) => (
              <div key={product.id} className="product">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="productImg"
                  />
                </div>
                <div className="product-details">
                  <p className="p-name">{product.title}</p>
                  <p className="price">Price: ${product.price}</p>
                  <button className="addToCart-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FakeStore;
