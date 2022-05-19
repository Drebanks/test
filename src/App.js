import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Layout from "./components/Layout/layout";
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
          <Layout>
            <Verify />
          </Layout>
        }
        />
        <Route path="/success"
         element={
          <Layout>
            <Success />
          </Layout>
        }
        />
        <Route path="/dashboard"
         element={
          <Layout>
            <Dashboard />
          </Layout>
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
