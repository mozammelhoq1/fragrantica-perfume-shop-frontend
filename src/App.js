import logo from "./logo.svg";
import "./App.css";
import Footer from "./Pages/Shared/Footer/Footer";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <NavigationBar /> */}
      <Footer />
    </div>
  );
}

export default App;
