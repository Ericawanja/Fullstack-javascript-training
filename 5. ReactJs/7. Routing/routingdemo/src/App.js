import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import OneProduct from "./components/OneProduct";
import Products from "./components/Products";
import ProductsDisplay from "./components/ProductsDisplay";
import { products } from "./data";

function App() {
  return (
    <div className="App">
      <Routes>       
        <Route path={"/products"} element={<Products products={products} />}>
          <Route
            index
            element={<ProductsDisplay products={products} category={"all"} />}
          />
          <Route
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
          />
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
