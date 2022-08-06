import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import ShoppingCart from "./Container/ShoppingCart/ShoppingCart";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Shop" element={<Shop />}></Route>
                    <Route
                        path="/ShoppingCart"
                        element={<ShoppingCart />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
