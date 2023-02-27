import {  Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar"
import Home from "./Components/pages/home/Home";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App;
