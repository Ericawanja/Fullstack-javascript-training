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
        <span>{product?.title}</span>
        <span>{product?.description}</span>
        <span>
            <span>${product?.price}</span>
            <span>{product?.discount}</span>
        </span>
     </div>
    </div>
  );
}

export default OneProduct;
