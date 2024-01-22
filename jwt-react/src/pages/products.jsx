import React, { useEffect, useState } from 'react';
import { sendAuthenticatedRequest } from '../api/authenticate'; 

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await sendAuthenticatedRequest('http://localhost:8000/api/jbs/products'); // gọi getAllList sản phẩm
        console.log('Danh sách sản phẩm:', response);

        setProducts(response);
      } catch (error) {
        console.error('Lỗi lấy danh sách sản phẩm:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;

// //các sử lý khác
// // sử dụng mặc định (GET)
// sendAuthenticatedRequest('http://localhost:8000/api/jbs/products');

// // sử dụng POST
// sendAuthenticatedRequest('http://localhost:8000/api/jbs/products', 'POST', { /* data */ });

// // sử dụng PUT
// sendAuthenticatedRequest('http://localhost:8000/api/jbs/products', 'PUT', { /* data */ });

// // sử dụng DELETE
// sendAuthenticatedRequest('http://localhost:8000/api/jbs/products', 'DELETE');
