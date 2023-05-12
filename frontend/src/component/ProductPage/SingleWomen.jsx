import React, { useEffect, useState } from 'react'
import styles from "./SingleProduct.module.css"
import { BsFillShareFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { color } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleWomen } from '../../redux/ProductPageReducer/action';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { async } from 'q';
import Footer from '../utility/Footer';
import { useToast } from '@chakra-ui/react';


const token = JSON.parse(localStorage.getItem("userToken"));
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYmgiLCJsYXN0TmFtZSI6ImZndCIsInVzZXJJRCI6IjY0NWUyODQ4ZjEwYzc1NTFkN2E0N2IzMSIsImlhdCI6MTY4Mzg5MjMwOX0.aVW5RSAkLDko0lUqORc9zYEtqlhFtJrKCU_XDM-WJMc"

const getCart = () => {
    // console.log(token)
    return axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart`, { headers: { Authorization: token } })
    //  .then((res)=>{
    //     console.log(res.data)

    // }).catch((err)=>{
    //     console.log(err)
    // })
}

const postCart = (token, obj) => {
    return axios.post(`https://clumsy-miniskirt-tuna.cyclic.app/cart/add`, obj, { headers: { Authorization: token } })
}


const SingleWomen = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [size, setSize] = useState("");
    const [cart, setCart] = useState([]);
    const [check,setCheck] = useState(false)
    const nav = useNavigate()

    const toast = useToast();
    const statuses = ["success", "error", "warning", "info"];
    const positions = ["top"];




    const handleSize = (payload) => {
        if (token) {

            console.log(payload)
            setSize((prev) => prev = payload)
            toast({
                title: `You Select ${payload} Size          `,
                position: positions,
                status: statuses[3],
                isClosable: true,
                duration: 1500
            });
        } else {
            toast({
                title: "Please Login",
                position: positions,
                status: statuses[2],
                background: "red",
                isClosable: true,
                duration: 1000
            });
            setTimeout(() => {

                nav("/login")
            }, 1400)
        }


    }
    // const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJkZGQiLCJsYXN0TmFtZSI6Im1hbGUiLCJ1c2VySUQiOiI2NDViNTAxOTk0ZmZmM2ZiZmQzMmVkYmUiLCJpYXQiOjE2ODM3MDc5MzZ9.u3tjrkJIW6cvaalHnRGWd26CmThbr32CI-UVJZXJ9tE"

    // const token = token1 || token2

    const handleCart = () => {
        setCheck(!check)
        if (token) {

            // console.log("hellocart")
            let obj = data[0]

            obj.quantity = 1;
            obj.size = size;

                // setCart((prev)=>prev=res.data)

                    let flag = true;
                    for (let x of cart) {
                        if (x.Price == obj.Price && x.ogPrice==obj.ogPrice && x.size==obj.size) {
                            flag = false
                            break
                        }
                    }
                    if (flag && obj.size) {
                        console.log(cart)
                        console.log(obj.size)
                        console.log("you can post")
                        console.log(token)
                        delete obj._id
                        

                        // console.log(obj)
                        // const newObj = {
                        //     Price: obj.price,
                        //     brand: obj.brand,
                        //     discount: obj.discount,
                        //     gender: obj.gender,
                        //     image: obj.image,
                        //     offerType: obj.offerType,
                        //     ogPrice: obj.ogPrice,
                        //     quantity: 1,
                        //     size:obj.size,
                        //     title:obj.title
                        // }
                        postCart(token, obj).then((res) => {
                            console.log(res.data)
                            window.location.reload()
                            obj.size=""
                        }).catch(err => console.log(err))
                        toast({
                            title: "Added To Cart",
                            position: positions,
                            status: statuses[0],
                            isClosable: true,
                            duration: 1500
                        });

                    } else if (!obj.size) {
                        toast({
                            title: "Select The Size",
                            position: positions,
                            status: statuses[2],
                            color: "red",
                            isClosable: true,
                            duration: 1500
                        });
                    } else {
                        toast({
                            title: "Already in the Cart",
                            position: positions,
                            status: statuses[2],
                            background: "red",
                            isClosable: true,
                            duration: 1500
                        });
                    }
                




        } else {
            console.log("Please login");
            toast({
                title: "Please Login",
                position: positions,
                status: statuses[2],
                background: "red",
                isClosable: true,
                duration: 1000
            });
            console.log(token)
            setTimeout(() => {

                nav("/login")
            }, 1400)

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
        axios.get(`https://clumsy-miniskirt-tuna.cyclic.app/cart`, { headers: { Authorization: token } }).then((res)=>{
            setCart((prev)=>prev=res.data)
        }).catch((err)=>console.log(err))
    }, [check,size])

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
                            <button onClick={() => handleSize("M")}>M</button>
                            <button onClick={() => handleSize("L")}>L</button>
                            <button onClick={() => handleSize("XL")}>XL</button>
                            <button onClick={() => handleSize("2XL")}>2XL</button>
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
                <Footer />
                <div className={styles.media}>
                    <div>
                        <button>BUY NOW</button>
                    </div>
                    <div>
                        <button onClick={handleCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default SingleWomen
