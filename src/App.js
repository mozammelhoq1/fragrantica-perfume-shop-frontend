import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/HomePage/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
