import React,{useState} from 'react'
import data from "../assets/product.json"
import Product from './Product'
import "./Home.css";


export const Home = () => {
 const [product] = useState(data)
  return (
    <div className='product-container'>
        {product.map((product)=>(
            < Product key={Product.id} product={product} />
        ))}

    </div>
  )
}
export default Home;

