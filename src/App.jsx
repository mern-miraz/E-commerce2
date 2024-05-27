import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./components/root/RootLayout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home"
import Journal from "./pages/Journal";
import Product from "./pages/Product";


import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/Cart";
function App() {

  let router= createBrowserRouter (createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/products" element={<Product/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/contacts" element={<Contacts/>} ></Route>
      <Route path="/journal" element={<Journal/>} ></Route>
      <Route path="/products/:id" element={<ProductDetails/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
