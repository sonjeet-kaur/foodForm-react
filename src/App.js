import './Assets/Sass/style.scss';
import { BrowserRouter as Router, Routes, Outlet, Route } from "react-router-dom";
import Login from './Components/Loginlayout/Login';
import Register from './Components/Loginlayout/Register';
// import Footer from './Components/HeadLayout/Footer';
import Home from './Components/PublicLayout/Home';
import Header1 from './Components/HeadLayout/Header1';
import AddtoCart from './Components/PublicLayout/AddtoCart';
import Checkout from './Components/PublicLayout/Checkout';
import PrivateRoutes from './Routes/PrivateRoutes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  function LoginLayout() {
    return (
      <Outlet />
    )
  }

  function PublicLayout() {
    return (
      <>
          <Header1 />
        <Outlet />
        {/* <Footer /> */}
      </>
    )
  }

  return (
    <>
      <div className="App">
          <Router>
            <Routes>
              <>
                <Route element={<LoginLayout />}>

                  <Route path="/login" element={<Login />} />
                  <Route path='/register' element={<Register />} />

                </Route>
                <Route element={<PrivateRoutes />}>
                  <Route element={<PublicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<AddtoCart />} />
                    <Route path='/checkout' element={<Checkout />} />
                  </Route>
                </Route>
              </>
            </Routes>
          </Router>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
