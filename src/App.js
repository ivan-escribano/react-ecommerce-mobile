import Alert from "./components/alert/Alert";
import ShoppingCart from "./components/cart/ShoppingCart";
import CheckoutConfirm from "./components/checkout/CheckoutConfirm";
import CheckoutForm from "./components/checkout/CheckoutForm";
import Filter from "./components/filter/Filter";
import LoginForm from "./components/login/LoginForm";
import NavMobile from "./components/nav-mobile/NavMobile";
import NavBar from "./components/navbar/NavBar";
import SearcherModal from "./components/searcher/SearcherModal";
import WishListModal from "./components/wishlist/WishListModal";
import GeneralProvider from "./context/GeneralProvider";
import Router from "./router/Router";
import "./style/mobile-queries.css";
function App() {
  return (
    <>
      <GeneralProvider>
        <NavMobile />
        <NavBar />
        <Router />
        <Alert />
        <ShoppingCart />
        <WishListModal />
        <LoginForm />
        <SearcherModal />
        <CheckoutForm />
        <CheckoutConfirm />
        <Filter />
      </GeneralProvider>
    </>
  );
}

export default App;
