import React from 'react'
import styles from "./SingleProduct.module.css"
import { BsFillShareFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { color } from 'framer-motion';
const SingleProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <img src="https://img3.junaroad.com/uiproducts/18579122/zoom_0-1665495083.jpg" alt="product"></img>
                </div>
                <div className={styles.right}>
                    <p>Floral Lehenga Choli With Dupatta</p>
                    <p>Brand Scakhi</p>
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
                    <div className={styles.priceMain}>
                        <div className={styles.priceLeft}>
                            <div className={styles.mrp}>
                                <p>M.R.P</p>
                                <div>
                                    <p>: ₹ </p>
                                    <p> 2345</p>
                                </div>
                            </div>
                            <div className={styles.price}>
                                <p>Price</p>
                                <div>
                                    <p>: ₹ </p>
                                    <p> 1945</p>
                                </div>
                            </div>
                            <div className={styles.save}>
                                <p>You Save</p>
                                <div>
                                    <p>: ₹ </p>
                                    <p> 1000 (30%)</p>
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
                        <button>ADD TO CART</button>
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
        </div>
    )
}

export default SingleProduct
