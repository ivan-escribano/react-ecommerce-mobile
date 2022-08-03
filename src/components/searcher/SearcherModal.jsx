import { useContext, useRef } from "react";
import "./Searcher.css";
import productsData from "../../data/phones";
import ProductItem from "../../pages/home/components/ProductItem";
import { useState } from "react";
const SearcherModal = () => {
  const [word, setWord] = useState("");
  const inputSearch = useRef();
  const handleSearch = () => {
    setWord(inputSearch.current.value.toLowerCase());
  };

  return (
    <div
      class="modal fade "
      id="searcherModal"
      tabindex="-1"
      aria-labelledby="searcherModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal__search modal-xl m-auto">
        <div class="modal-content">
          <div class="modal-header cover">
            <div className=" w-50">
              <h5 class="modal-title" id="exampleModalLabel">
                Searcher:
              </h5>
              <div className="input-group mt-2">
                <span class="input-group-text" id="addon-wrapping">
                  <i class="fa-solid fa-magnifying-glass"></i>
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
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className=" p-4">
              {" "}
              <h5>Results.</h5>
              <div className="products-searcher row row-cols-4 g-4 m-0 ">
                {productsData.slice(0, 4).map((product) => {
                  if (product.name.toLowerCase().includes(word))
                    return <ProductItem product={product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearcherModal;
