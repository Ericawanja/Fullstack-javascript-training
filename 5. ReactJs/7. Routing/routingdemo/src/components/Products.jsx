import React, { useEffect, useState } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Products({ products }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const handleCategoryNavigation = (category) => {
    
     navigate(`/products/${category}`)
    
  };

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
            return (
              <span
                className="category"
                key={index}
                onClick={() => handleCategoryNavigation(category)}
              >
                {category}
              </span>
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
