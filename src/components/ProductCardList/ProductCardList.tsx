import type { IProduct } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCardList.css";

interface ProductCardListProps {
  products: IProduct[];
}

const ProductCardList: React.FC<ProductCardListProps> = ({ products }) => {
  return (
    <>
      <h2 className="productcardlist__title">Список продуктов</h2>
      <ul className="productcardlist__list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductCardList;
