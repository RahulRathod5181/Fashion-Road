import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from '../../redux/ProductPageReducer/action'
import styles from "./Product.module.css"
import AccordionSide from './Accordion'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';



const Product = () => {
  const dispatch = useDispatch()
  const { productData } = useSelector((store) => {
    // console.log(store)
    return store.ProductPageReducer
  })
  console.log(productData)
  useEffect(() => {
    // fetch("").then((res)=>res.json).then((res)=>console.log(res.data))
    dispatch(getProduct);
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div>
          <h2>Clothing</h2>
          <h2>201441 products</h2>
        </div>
        <div>
          <p>Filter & Sort</p>
          <AccordionSide />
        </div>
      </div>
      <div className={styles.right}>

        {productData?.map((el, i) => (
          <div key={i + 1} className={styles.productCard}>
            <img src={el.image} alt={el.title} />
            <p>{el.title.toUpperCase().substring(0,44)}</p>
            <p>By {el.brand}</p>
            <p>{i+1}</p>
            <div className={styles.info}>
              <div className={styles.price}>
                <p>₹{el.Price}</p>
                <p>₹{el.ogPrice}</p>
                <p>{el.discount}% Off</p>
              </div>
              <div className={styles.icon}>
                <AiOutlineHeart color="#f93183" size={"24px"}  />
                <BsWhatsapp color='rgb(37, 211, 102)' size={"22px"} />
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
