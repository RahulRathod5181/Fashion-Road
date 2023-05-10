import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {getProductMen } from '../../redux/ProductPageReducer/action'
import styles from "./Product.module.css"
import AccordionSide from './Accordion'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { HiFilter } from 'react-icons/hi';
import { BiSortAlt2 } from 'react-icons/bi';
import { useLocation, useSearchParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar'
import SidebarMen from './SiebarMen'



const Product = () => {
  const [count, setCount] = useState(0)
  const { productData, isLoading } = useSelector((store) => {
    // console.log(store)
    return store.ProductPageReducer
  })
  // console.log(productData)

  const [searchParams] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch()

  let obj = {
    params: {
      discount: searchParams.getAll("discount"),
      brand: searchParams.getAll("brand"),
      offers: searchParams.getAll("offers"),
      price:searchParams.get("price")
    }
  }

  useEffect(() => {
    dispatch(getProductMen(obj));
    setCount((prev) => prev = productData.length)
  }, [location.search, productData.length])



  return (

    <>
        <Navbar/>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.count}>
            <h2>Clothing</h2>
            <h2>{count} products</h2>
          </div>
          <div>
            <p>Filter & Sort</p>
            {/* <AccordionSide /> */}
            <SidebarMen/>
          </div>
        </div>
        {isLoading?((< div style={{margin:"auto", marginTop:"20px"}} >  <h2 style={{ fontSize: "24", fontWeight: "bold", letterSpacing: "1px", margin:"auto" }}>Loading...</h2> <Spinner color='#65e6e5' mt={"20px"} size={'xl'} m={"auto"} /></div>)):(!productData.length && !isLoading)?(<h2 style={{ fontSize: "30px", fontWeight: "bold", letterSpacing: "1px", margin:"auto", marginTop:" 50px" }}>No Products Available!!</h2>):(

        <div className={styles.right}>

          {productData?.map((el, i) => (
            <div key={i + 1} className={styles.productCard}>
              <img src={el.image} alt={el.title} />
              <p>{el.title.toUpperCase().substring(0, 44)}</p>
              <p>By {el.brand}</p>
              <p>{i + 1}</p>
              <div className={styles.info}>
                <div className={styles.price}>
                  <p>₹{el.Price}</p>
                  <p>₹{el.ogPrice}</p>
                  <p>{el.discount}% Off</p>
                </div>
                <div className={styles.icon}>
                  <AiOutlineHeart color="#f93183" size={"24px"} />
                  <BsWhatsapp color='rgb(37, 211, 102)' size={"22px"} />
                </div>
              </div>
            </div>
          ))}
        </div>)}


      </div>
      {!isLoading?(<div className={styles.media}>
        <div>
          <HiFilter size={"28px"} /><p>Filter</p>
        </div>
        <div>
          <BiSortAlt2 size={"28px"} /><p>Sort</p>
        </div>
      </div>):(<></>)}
      
    </>

  )




}

export default Product
