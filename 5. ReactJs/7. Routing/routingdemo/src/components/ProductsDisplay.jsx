import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function ProductsDisplay({ products, category }) {
  const navigate = useNavigate();
  const [data, setData] = useState(products);
  const handleNavigation = (id) => {
    navigate(`/products/${id}`);
  };
  useEffect(()=>{
    if(category==='all'){
        setData(products)
    }else{
        const itemsInCategory = products.filter(p=>p.category === category)
        setData(itemsInCategory)
    }

  }, [products])
 
  return (
    <div className="productsContainer">
      {data && data.length > 0 ? (
        data.map((product) => {
            console.log(product)
          return (
            <div className="product" key={product.id}>
              <div
                className="pImg"
                onClick={() => handleNavigation(product.id)}
              >
                <img src={product?.images[0]} alt="product " />
              </div>
              <div className="pDetails">
                <span className="price">{product.price || "no price"}</span>
                <span>{product.title}</span>

                <span className="seeMore">
                  <Link to={`/products/${product.id}`}>See more</Link>
                </span>
              </div>
              <div className="addtoCart">Add to Cart</div>
            </div>
          );
        })
      ) : (
        <div>
          <h2>There are no products</h2>
        </div>
      )}
    </div>
  );
}

export default ProductsDisplay;
