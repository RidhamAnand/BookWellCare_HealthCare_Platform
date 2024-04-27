import "../../index.css";
import React from "react";
import Image from "../../images/land-img.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Button, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header/Header";
const Hero = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}


            >
                <div className="full-home-container mt-28 h-full md:h-screen" >
                    <div className="home-container shadow-xl">
                        <div className="hero-text px-3 text-center py-10  -mt-12 lg-justify-center lg:text-left basis-full  md:basis-1/2 md:text-left md:w-full  ">
                            <h1 className="!leading-snug mt-8 mb-4 text-black font-poppins text-3xl text-center md:text-left lg:text-6xl font-bold lg:text-left md:text-5xl sm:text-4xl ">Easiest Way to Find <br /> Your Best <span className="text-[#1976D2]"> Doctors</span></h1>
                            <p className="text-justify text-gray-400 font-roboto  mb-6 sm:text-left text-md md:text-xl capitalize    ">BookWellCare believes in everyone's right to quality healthcare. <br /> Our mission: empower you with a platform that prioritizes convenience, choice, and personalized care. </p>

                            <div className="justify-center md:justify-start flex flex-row gap-3">
                                <Button variant="contained" disableElevation size="large" sx={
                                    {
                                        borderRadius: "20px",
                                        textTransform: "capitalize"
                                    }
                                }><p className="text-xs md:text-lg">Book Appointment</p></Button>

                                <Button variant="outlined" disableElevation size="large" sx={
                                    {
                                        borderRadius: "20px",
                                        textTransform: "capitalize"
                                    }
                                }> <p className="text-xs md:text-lg">Explore</p>  </Button>
                            </div>
                        </div>


                        <div className=" hidden mb-3 -mr-6 md:basis-1/2  md:flex sm:hidden  hero-img-container">
                            <img className="img h-full" src={Image} alt="" />

                        </div>


                    </div>


                </div>
            </motion.div>

            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}


            >

                {/* <div className="card">

                    <div className="card-text" >
                        <h1 className="text-md md:text-lg text-left" >Our System Makes It Easy For Healthcare <br />
                            Collaborate On Pateint Care
                        </h1>
                    </div>
                    <div className="card-button" >
                        <button class=" text-sm bg-green-500 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full duration-700 m-2">
                            Explore More
                        </button>
                        <IconButton style={{
                            background: "#22C55E",
                            marginLeft: "5px"
                        }}  >
                            <ArrowOutwardIcon style={{
                                color: "white"
                            }} />
                        </IconButton>


                    </div>

                </div> */}

            </motion.div>
        </>
    )


}
export default Hero;