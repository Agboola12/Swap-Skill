import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";  
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Register";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Outcome School</title>
      </Helmet>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </Router>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;