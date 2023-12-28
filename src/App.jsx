import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./companents/Header/Header";
import RestCard from "./companents/RestCard/restSlice";
import Category from "./companents/Category/Category";
import Auth from "./companents/Auth/Auth";
import Menu from "./companents/Menu/Menu";
import Cart from "./companents/Cart/Cart";
import Footer from "./companents/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/"} element={<RestCard />} />
        <Route path={"/category/:id"} element={<Category />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/menu"} element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
