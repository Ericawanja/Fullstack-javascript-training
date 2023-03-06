import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import { products } from "./data";

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = products.map((p) => p.category);

    const categoriesArr = Array.from(new Set(categories));
    setCategories(categoriesArr);
  }, [products]);
  return (
    <div className="App">
       <Navbar />
      <Routes>       
        <Route path={"/products"} element={<Products products={products} />}>
          <Route
            index
            element={<ProductsDisplay products={products} category={"all"} />}
          />
          {categories.length > 0 && categories.map(c=>{
            return <Route
            path={`${c}`}
            element={
              <ProductsDisplay products={products} category={`${c}`}/>
            }
          />
          })}
          {/* <Route
            path={"smartPhones"}
            element={
              <ProductsDisplay products={products} category={"smartphones"} />
            }
          />
          <Route
            path={"laptops"}
            element={
              <ProductsDisplay products={products} category={"laptops"} />
            }
          />
          <Route
            path={"groceries"}
            element={
              <ProductsDisplay products={products} category={"groceries"} />
            }
          />*/}
        </Route>
        <Route
          path="/products/:id"
          element={<OneProduct products={products} />}
        /> 
      </Routes>
    </div>
  );
}

export default App;
