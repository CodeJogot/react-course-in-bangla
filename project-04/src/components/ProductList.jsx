import React from 'react';

const products = [
  { id: 101, name: "Laptop", price: 999.99, isAvailable: true },
  { id: 102, name: "Smartphone", price: 699.99, isAvailable: false },
  { id: 103, name: "Tablet", price: 499.99, isAvailable: true },
];

function ProductList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>
            {product.isAvailable ? (
              <span style={{ color: 'green' }}>In Stock</span>
            ) : (
              <span style={{ color: 'red' }}>Out of Stock</span>
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}





export default ProductList;