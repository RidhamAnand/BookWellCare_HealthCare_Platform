import './App.css';
import Hero from './Components/Hero/Hero';
import { ServicesContainer } from './Components/ServicesComponent/ServicesContainer';
import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import FindDoctorPage from './Components/FindDoctor/FindDoctorPage';
import { DoctorDetailsPage } from './Components/DoctorDetails/DoctorDetails';
import { LoginSignup } from './Components/Login/Login';
import { BookedAppointments } from './Components/BookedAppointments/BookedAppointments';
import { UserAndDoctor } from './Components/UserAndDoctor/UserAndDoctor';
import DoctorDashboard from './Components/Doctor/Dashboard/Dashboard';
import { DoctorLogin } from './Components/Doctor/DoctorLogin';
import { DoctorProfile } from './Components/Doctor/Profile/DoctorProfile';
import { AppointmentsSection } from './Components/Doctor/AppointmentsSection.js/AppointmentsSection';
import { SaveReportsSection } from './Components/SaveReports/SaveReportsSection';
import DefaultPage from './Components/DefaultPage';
import cardImag1 from "../src/images/cardImg1.jpg"
import calendarImg from "../src/images/hero-img.png"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ComputerIcon from '@mui/icons-material/Computer';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Footer from './Components/Footer/Footer';

function Home() {

  const navigate = useNavigate();


  useEffect(() => {

    if (!localStorage.getItem("username")) {
      navigate("/login");
    }

  }, [])



  return <div>



    <Hero />
    <ServicesContainer />

    <div className=" px-10 py-12 flex flex-col rounded-2xl gap-10 m-10 bg-white">

      <div className='flex flex-col gap-2'>


        <h1 className="text-gray-400 text-md md:text-xl lg:text-xl font-robotto font-normal   mb-2">Why Choose Book Well Care ?</h1>
        <h1 className="text-2xl md:text-4xl font-poppins font-bold text-[#1976D2]  mb-2"> Because Your Health Matters! </h1>

        <p className='px-1 text-justify md:px-20 font-roboto capitalize text-gray-500'> we believe in empowering you to take control of your healthcare journey with
          ease and convenience. Our platform seamlessly connects you with top-tier
          healthcare professionals and streamlines the appointment scheduling process,
          ensuring that you receive the care you need, when you need it.</p>

      </div>

      {/* cards-section */}

      <div className='cards-section  p-3 flex flex-col  md:flex-row gap-10 bg-white'>

        <div className='cards flex  bg-[#EBF9FF] flex-col items-center  justify-center gap-3 p-7 md:w-1/3 '>
          <CalendarMonthIcon sx={{

            bgcolor: "white",
            padding: "10px",
            width: "50px",
            height: "50px",
            color: '#1976D2',
            borderRadius: '10px',
          }} />
          <p className="font-poppins font-medium text-xl text-[#1976D2]">Effortless Appointment Booking</p>
          <p  className='font-roboto text-justify md:text-center text-gray-600'>With just a few clicks, schedule appointments with your preferred healthcare providers at your convenience. Our intuitive interface makes it simple to find availability and book appointments that fit seamlessly into your schedule</p>
        </div>
        <div className='cards flex  bg-[#EBF9FF] flex-col items-center  justify-center gap-3 p-7 md:w-1/3 '>
          <ComputerIcon sx={{
            padding: "10px",
            bgcolor: "white",
            borderRadius: '10px',
            width: "50px",
            height: "50px",
            color: '#1976D2'
          }} />
          <p className="font-poppins font-medium text-xl text-[#1976D2]">Virtual Consultations</p>
          <p  className='font-roboto text-justify md:text-center text-gray-600'> Experience healthcare on your terms with our integrated video conferencing feature. Connect with healthcare professionals from the comfort of your home or office, eliminating the need for travel and allowing for real-time consultations.</p>
        </div>
        <div className='cards flex  bg-[#EBF9FF] flex-col items-center  justify-center gap-3 p-7 md:w-1/3 '>
          <AssignmentTurnedInIcon sx={{
            padding: "10px",
            bgcolor: "white",
            width: "50px",
            height: "50px",
            color: '#1976D2',
            borderRadius: '10px',
          }} />
          <p className="font-poppins font-medium text-xl text-[#1976D2]">Secure Document Management</p>
          <p  className='font-roboto text-justify md:text-center text-gray-600'>Safeguard your medical records and reports with our secure document management system. Easily access and manage your health information, ensuring that your records are always at your fingertips when you need them most.</p>
        </div>







      </div>





    </div>
    <Footer/>



  </div>
}


function App() {
  return (
    <div className="App"  >


      <Routes>
      <Route path='/app' element={<DefaultPage/>} ></Route>
        <Route path='/login' element={<LoginSignup />}> </Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/findDoctor' element={<FindDoctorPage />}> </Route>
        <Route path='/doctor' element={<DoctorDetailsPage />}> </Route>
        <Route path='/appointments' element={<BookedAppointments />}> </Route>
        <Route path='/options' element={<UserAndDoctor />}> </Route>
        <Route path='/doctorLogin' element={<DoctorLogin />}> </Route>
        <Route path='/reports' element={<SaveReportsSection />}> </Route>

        {/* Doctor */}
        <Route path='/admin' element={<DoctorDashboard />}>

          <Route path='appointments' element={<AppointmentsSection />}></Route>
          <Route path='profile' element={<DoctorProfile />}></Route>

        </Route>



      </Routes>



    </div>
  );
}

export default App;
