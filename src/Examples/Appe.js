// src/App.js
import React, { useState } from 'react';
import './appe.css'
import products from '../Assets/images/list';
import ProductList from './ProductList'; // Component to list products
import Pagination from './Pagination';  // Component for pagination controls

  
 

function Appe() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={currentProducts} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.src}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Appe;
