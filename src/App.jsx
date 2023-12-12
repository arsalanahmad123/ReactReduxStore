import Profile from "./Screens/Profile";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
