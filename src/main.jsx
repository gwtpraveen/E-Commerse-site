import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/error-page";
import AdminLog from "./routes/AdminLog";
import ProductPage from "./routes/ProductPage";
import Home from "./components/Home";
import "./index.css";
import SearchResult from "./components/SearchResult";
import LogIn from "./routes/Login";
import DashBoard from "./routes/Dashboard";
import AddNewProduct from "./routes/AddNewProducts";
import Signup from "./routes/Signup";
import ShopSignup from "./routes/ShopSignup";
import AllProducts from "./routes/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/product/:id",
        element: <ProductPage/>
      }, {
        path: "/result",
        element: <SearchResult/>
      }  
    ]
  }, {
    path: "/ec-adminlog",
    element: <AdminLog/>
  }, {
    path: "/login",
    element: <LogIn/>
  }, {
    path: "/signup",
    element: <Signup />
  }, {
    path: "/shopsignup",
    element: <ShopSignup/>
  }, {
    path: "/:userId/dashboard",
    element: <DashBoard/>,
    children: [
      {
        path: "/:userId/dashboard/addnewproduct",
        element: <AddNewProduct/>
      }, 
      {
        path: "/:userId/dashboard/allproducts",
        element: <AllProducts/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
