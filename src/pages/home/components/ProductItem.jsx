import { Link } from "react-router-dom";
import PorductAdd from "./ProductAdd";
import ProductWishBtn from "./ProductWishBtn";

const ProductItem = ({ product }) => {
  const idString = product.id.toString();
  const detail_url = `/product-details/${idString}`;
  return (
    <div className="porduct-item ">
      <div className="card p-0 h-100">
        <Link to={detail_url} state={product}>
          <img
            src={product.img}
            alt={product.name}
            className="card-img-top p-5 cover"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-title">{product.price} €</h6>
          <p className="card-text card__description">{product.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <ProductWishBtn product={product} />
          <PorductAdd product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
