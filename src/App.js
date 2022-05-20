import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Layout from "./components/Layout/layout";
import Layout2 from "./components/Layout/layout2";
import Dashboard from './pages/Dashboard/dashboard';
import Verify from "./pages/Verify/verify";
import Success from "./pages/Success/success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
          <Layout>
            <Home />
          </Layout>
        }/>
        <Route path="/signup"
         element={
          <Layout>
            <Register />
          </Layout>
        }
        />
        <Route path="/verify"
         element={
          <Layout2>
            <Verify />
          </Layout2>
        }
        />
        <Route path="/success"
         element={
          <Layout2>
            <Success />
          </Layout2>
        }
        />
        <Route path="/dashboard"
         element={
          <Layout2>
            <Dashboard />
          </Layout2>
        }
        />
      </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
