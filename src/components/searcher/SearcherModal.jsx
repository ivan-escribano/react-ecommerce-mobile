import { useContext, useRef } from "react";
import "./Searcher.css";
import productsData from "../../data/phones";
import ProductItem from "../../pages/home/components/ProductItem";
import { useState } from "react";
import emptyImg from "../../assets/img/empty.webp";
const SearcherModal = () => {
  const [word, setWord] = useState("");
  const inputSearch = useRef();
  const handleSearch = () => {
    setWord(inputSearch.current.value.toLowerCase());
  };
  const showSearchedItems = () => {
    const products = productsData
      //First filter and return the product you want
      .filter((product) => product.name.toLowerCase().includes(word))
      //Then return transform data in react component
      .map((product) => <ProductItem product={product} key={product.id} />);
    return products.length > 0 ? (
      products.slice(0, 4)
    ) : (
      <div className="d-flex flex-column m-auto">
        <h4>No products finded</h4>
        <img src={emptyImg} alt="Empty image" />
      </div>
    );
  };
  return (
    <div
      className="modal fade "
      id="searcherModal"
      tabIndex="-1"
      aria-labelledby="searcherModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal__search modal-xl m-auto">
        <div className="modal-content">
          <div className="modal-header cover">
            <div className=" w-50 searcher">
              <h5 className="modal-title" id="exampleModalLabel">
                Searcher:
              </h5>
              <div className="input-group mt-2">
                <span className="input-group-text" id="addon-wrapping">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Xiaomi 12 pro"
                  onChange={handleSearch}
                  ref={inputSearch}
                />
              </div>
            </div>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className=" p-4">
              {" "}
              <h5>Results.</h5>
              <div className="products-searcher row row-cols-4 g-4 m-0 ">
                {showSearchedItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearcherModal;
