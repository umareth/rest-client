import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./companents/Header/Header";
import RestCard from "./companents/RestCard/RestCard";
import Category from "./companents/Category/Category";
import Auth from "./companents/Auth/Auth";
import Menu from "./companents/Menu/Menu";
import Cart from "./companents/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/"} element={<RestCard />} />
        <Route path={"/category"} element={<Category />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/menu"} element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
