import React from "react";
import type { IProduct } from "../../types";
import "./ProductCard.css";
import { currencyFormatter } from "../../utiles";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product">
      <h3 className="product__title">{product.title}</h3>
      <p className="product__text">{product.origin}</p>
      <p className="product__price">
        {currencyFormatter(product.currency, product.price)}
      </p>
      <img
        className="product__picture"
        src={product.imageUrl}
        alt={"Изображение не найдено"}
      />
    </div>
  );
};

export default ProductCard;
