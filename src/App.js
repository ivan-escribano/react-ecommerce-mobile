import Alert from "./components/alert/Alert";
import ShoppingCart from "./components/cart/ShoppingCart";
import LoginForm from "./components/login/LoginForm";
import NavBar from "./components/navbar/NavBar";
import WishListModal from "./components/wishlist/WishListModal";
import GeneralProvider from "./context/GeneralProvider";
import Router from "./router/Router";

function App() {
  return (
    <>
      <GeneralProvider>
        <NavBar />
        <Router />
        <Alert />
        <ShoppingCart />
        <WishListModal />
        <LoginForm />
      </GeneralProvider>
    </>
  );
}

export default App;
