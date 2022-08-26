import { useRef } from "react";
import imgURL from "../../assets/img/comparator-img.png";
import phones from "../../data/phones";
import { useNavigate } from "react-router-dom";
const ComparadorInputs = () => {
  // const [phonesState, setPhones] = useState({});
  const selectMobile1 = useRef("");
  const selectMobile2 = useRef("");
  const navigate = useNavigate();
  const handleClick = () => {
    const mobile1 = JSON.parse(selectMobile1.current.value);
    const mobile2 = JSON.parse(selectMobile2.current.value);
    navigate("/comparator-product", {
      state: { mobile1: mobile1, mobile2: mobile2 },
    });
  };
  return (
    <div className="inputs-comparator d-flex ">
      <div className="inputs-comparator__img">
        <img src={imgURL} alt="" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="">
          <h2>Select a mobile to compare 1:</h2>
          <select className="w-100 form-select-lg mt-2" ref={selectMobile1}>
            {phones.map((phone) => {
              if (phone.name === "Samsung Galaxy S22 ultra")
                return (
                  <option value={JSON.stringify(phone)} selected>
                    {phone.name}
                  </option>
                );
              else
                return (
                  <option value={JSON.stringify(phone)}>{phone.name}</option>
                );
            })}
          </select>
        </div>
        <div className="mt-5">
          <h2>Select a mobile to compare 2:</h2>
          <select className="w-100 form-select-lg mt-2" ref={selectMobile2}>
            {phones.map((phone) => (
              <option value={JSON.stringify(phone)}>{phone.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-color mt-5 w-50 d-flex align-items-center justify-content-center btn-comparator"
        >
          Compare mobiles <i class=" ms-3 fa-solid fa-mobile-retro fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default ComparadorInputs;
