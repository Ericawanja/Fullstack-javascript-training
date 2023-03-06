import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OneProduct({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    let product = products.find((p) => p.id === +id);
    
    setProduct(product);
  }, [id]);
  return (
    <div className="productCard">
     <div className="oneProductImg">
        <img src={product?.images[0]} alt="" />
        
     </div>
     <div className="oneProductDetails">
        <span className="pTitle">{product?.title}</span>
        <span className="pDesc">{product?.description}</span>
        <span className="priceDetails">
            <span className="pPrice">Price: ${product?.price}</span>
            <span className="pDiscount">Discount: {product?.discountPercentage}%</span>
        </span>
        <span className="addItemToCart">
          Add to cart
        </span>
     </div>
    </div>
  );
}

export default OneProduct;
