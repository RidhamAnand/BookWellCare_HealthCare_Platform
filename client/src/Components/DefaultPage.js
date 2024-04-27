import React from "react"
import Banner from "./Banner/Banner";
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import PatienImg from "../images/patient.png"
import { useNavigate } from "react-router-dom";

const DefaultPage = () => {
    const navigate = useNavigate();

    return <>


        <div className="default-page w-full flex flex-row   min-h-screen bg-white">



            {/* patient */}
            <div className=" basis-1/2 flex flex-col justify-center p-10 items-center  object-fill patient-container">

                <div className="card-poly shadow-lg">
                    <h1 className="m-10  md:text-5xl font-roboto font-medium">Patient Login</h1>
                    <p className="text-justify font-roboto md:text-lg">Your
                        Trusted Companion in Every Step of Your Wellness Journey.
                        Seamlessly Connecting Patients with Care, Anytime, Anywhere.
                        From Expert Advice to Tailored Solutions, We're Here to Empower You in
                        Taking Charge of Your Health and Well-being. Join Our Community
                        Today and Experience a New Era of Healthcare.

                    </p>

                    <Button variant="contained" fullWidth disableElevation
                        onClick={
                            () => {
                                navigate("/login")
                            }
                        } sx={
                            {
                               
                                margin: "20px 0",
                               
                            }
                        } color="primary"
                    >Get Started</Button>
                </div>
            </div>


            {/* doctor */}
            <div className=" basis-1/2 flex flex-col justify-center p-10 items-center  doctor-container">

                <div className="card-poly shadow-sm">
                    <h1 className="m-10  md:text-5xl font-roboto  font-medium">Doctor Login</h1>
                    <p className="text-justify font-roboto md:text-lg">
                        Join Our Network of Healthcare Innovators. Take Your Practice to New Heights with
                        Our Cutting-Edge Platform. Streamline Patient Care, Expand Your Reach, and Boost
                        Your Practice's Efficiency. Sign Up Today and Unlock a World of Opportunities to
                        Grow Your Medical Business and Enhance Patient Outcomes.

                    </p>

                    <Button 
                    
                    onClick={()=>{
                        navigate("/doctorLogin")
                    }}
                     variant="contained" size="large" fullWidth disableElevation sx={
                        {
                          
                            margin: "20px 0",
                            
                        }
                    } color="primary"
                    >Join as a Medical Professional</Button>

                </div>
            </div>

        </div>

        <footer className="-mt-10 ">
            <p className="font-bold ">BookWellCare @2024 </p>
        </footer>
      
    </>



}


export default DefaultPage;