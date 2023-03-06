import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Products({ products }) {
  
  const [categories, setCategories] = useState([]);

 
  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  return (
    <div>
      <Navbar />
      <div className="productsLayout">
        <div className="categories">
          {categories.map((category, index) => {
            return <span className="category" key={index}>{category}</span>;
          })}
        </div>
        <Outlet/>
        
      </div>
    </div>
  );
}

export default Products;
