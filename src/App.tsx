import { products } from "./constants";
import ProductCardList from "./components/ProductCardList/ProductCardList";
import "./App.css";



function App() {
  return (
    <div className="app">
      <ProductCardList products={products} />
    </div>
  );
}

export default App;
