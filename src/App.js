import React, { useState } from "react";
import Nav from "./comp/Nav";
import {BrowserRouter} from "react-router-dom" 
import Rout from "./comp/Rout";
import Footer from "./comp/Footer";
import Homeproduct from "./comp/Home_Products";


const App = () => {
  //Add To Cart
  const [cart, setCart] = useState([])
  //Shop Page Product
  const [shop, setShop] = useState(Homeproduct);
  //Shop Search Filter
  const [search, setSearch] = useState([])
  //Shop Category Filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => {
      return product.cat === x
    })
    setShop(catefilter);
  }
  const allcatefilter = () => {
    setShop(Homeproduct);
  }
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () => {
  if(searchlength){
    alert("Please Search Something!")
    setShop(Homeproduct)
  }
  else{

      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter);
    }
}
//Add To Cart
const addtocart = (product) => {
  const exist = cart.find((x) =>{
    return x.id === product.id
  })
  if(exist){
    alert("This product is alleardy added in cart")
  }
  else{
    setCart([...cart, {...product, qty:1}])
    alert("Added To cart")
  }
}
console.log(cart)
  return(
    <>
    <BrowserRouter>
    <Nav search={search} setSearch={setSearch} searchproduct={searchproduct} />
    <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;