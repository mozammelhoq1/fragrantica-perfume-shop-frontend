import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/HomePage/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import ManageProduct from "./Pages/Manage/ManageProduct/ManageProduct";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import Inventory from "./Pages/Manage/Inventory/Inventory";
import AddProduct from "./Pages/Manage/AddProduct/AddProduct";
import AllProducts from "./Pages/ProductsManagement/AllProducts/AllProducts";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproduct" element={<AllProducts />} />
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ManageProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/addproduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
