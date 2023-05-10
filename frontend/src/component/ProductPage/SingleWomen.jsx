import React, { useEffect, useState } from 'react'
import styles from "./SingleProduct.module.css"
import { BsFillShareFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { color } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleWomen } from '../../redux/ProductPageReducer/action';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { async } from 'q';
import Footer from '../utility/Footer';
const SingleWomen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const { productData, isLoading } = useSelector((store) => {
        // console.log(store)
        return store.ProductPageReducer
    })
    // const [save, setSave] = useState(0);

    const token = localStorage.getItem("userToken")

    const handleCart = ()=>{
        if(!token.length){
            console.log(token)
            console.log("hellocart")
        }else{
            console.log("Please login");

        }
    }

    useEffect(() => {
        // dispatch(getSingleWomen(id)).then((res)=>{
        //     setSave(productData[0].ogPrice-productData[0].Price)
        //     setData([...productData])
        // }).catch(err=>console.log(err.message))
        axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/products/womens/${id}`).then((res) => {
            // console.log(res.data)
            setData((prev) => prev = res.data)
            // setSave(+data[0].ogPrice - (+data[0].Price))
        }).catch((err) => console.log(err))
    }, [])
    // console.log(data)
    if (data.length) {

        var dis = data[0].ogPrice - data[0].Price
    }

    if (!data.length) {
        return <Navbar />
    } else {
        return (
            <div className={styles.container}>
                <Navbar />
                <div className={styles.main}>
                    <div className={styles.left}>
                        <img src={data[0].image} alt="product"></img>
                    </div>
                    <div className={styles.right}>
                        <p>{data[0].title}</p>
                        <p>By {data[0].brand}</p>
                        <div className={styles.share}>
                            <BsFillShareFill size={"22px"} />
                            <BsWhatsapp color='rgb(37, 211, 102)' size="23px" />
                        </div>
                        <div className={styles.size}>
                            <p>SELECT SIZE</p>
                            <Link to="#chartDetail">Size Chart</Link>
                        </div>
                        <div className={styles.sizeButton}>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>2XL</button>
                        </div>
                        <div className={styles.mediaPriceMain}>
                            <p>Product Price</p>
                        </div>
                        <div className={styles.priceMain}>
                            <div className={styles.priceLeft}>
                                <div className={styles.mrp}>
                                    <p>M.R.P</p>
                                    <div>
                                        <p>: ₹ </p>
                                        <p> {data[0].ogPrice}</p>
                                    </div>
                                </div>
                                <div className={styles.price}>
                                    <p>Price</p>
                                    <div>
                                        <p>: ₹ </p>
                                        <p> {data[0].Price}</p>
                                    </div>
                                </div>
                                <div className={styles.save}>
                                    <p>You Save</p>
                                    <div>
                                        <p>: ₹ </p>
                                        <p> {dis} ({data[0].discount}%)</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.priceRight}>
                                <p>OFFER</p>
                                <p>Pay Online & Get Flat 10% Off</p>
                            </div>
                        </div>
                        <div className={styles.tax}>
                            <p>M.R.P. inclusive of all taxes</p>
                        </div>
                        <div className={styles.cartButton}>
                            <button>
                                <AiOutlineHeart color=" #D3145A" size={"28px"} />
                            </button>
                            <button onClick={handleCart}>ADD TO CART</button>
                        </div>
                        <div className={styles.chart} id="chartDetail">
                            <p>SIZE CHART</p>
                            <Link>Centimeter/Inch</Link>
                        </div>
                        <div className={styles.sizeVarient}>
                            <p className={styles.std}>STANDARD SIZE</p>
                            <p className={styles.s}>S</p>
                            <p className={styles.m}>M</p>
                            <p className={styles.l}>L</p>
                            <p className={styles.xl}>XL</p>
                            <p className={styles.xxl}>2XL</p>
                            <p className={styles.xxxl}>3XL</p>
                        </div>
                        <div className={styles.brandsSizeVarient}>
                            <p className={styles.std}>Brand Size</p>
                            <p className={styles.s}>S</p>
                            <p className={styles.m}>M</p>
                            <p className={styles.l}>L</p>
                            <p className={styles.xl}>XL</p>
                            <p className={styles.xxl}>2XL</p>
                            <p className={styles.xxxl}>3XL</p>
                        </div>
                        <div className={styles.attention}>
                            <p>Sizechart provided is as per the garment measurement and not the body</p>
                        </div>
                        <div className={styles.delivery}>
                            <p>DELIVERY & RETURN</p>
                            <div className={styles.details}>
                                <p>Metros:</p>
                                <p>3-5 working days</p>
                            </div>
                            <div className={styles.details}>
                                <p>Other Cities:</p>
                                <p>5-7 working days</p>
                            </div>
                            <div className={styles.details}>
                                <p>areas serviceable only by speed post :</p>
                                <p>15 working days</p>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
                <div className={styles.media}>
                    <div>
                        <button>BUY NOW</button>
                    </div>
                    <div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleWomen
