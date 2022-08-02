import ProductDeleteBtn from "./ProductDeleteBtn";
import ProductQuantity from "./ProductQuantity";

const ProductCart = ({ product }) => {
  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.img}
            className="img-fluid rounded-start p-3"
            alt={product.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price} €</p>
            <div className="card-text d-inline-flex ">
              <ProductQuantity product={product} />
              <ProductDeleteBtn product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
