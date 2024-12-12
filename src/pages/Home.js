import React from "react";
import {useEffect} from "react";
import {Navbar} from './LandingPage/Navbar/Navbar.js';
import Mainpage from "./LandingPage/Mainpage/mainpage.js";
import Secondpage from "./LandingPage/Secondpage/secondpage.js"
import Thirdpage from "./LandingPage/Thirdpage/thirdpage.js";
import Review from "./LandingPage/testimonials/Review.js";
import Footer from "./LandingPage/Footer/MainFooter.js";
import FAQ from "./LandingPage/FAQ/FAQ.js";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div>
        <Navbar />
        <Mainpage />
        <Secondpage />
        <Thirdpage />
        <Review></Review>
        <FAQ></FAQ>
        <Footer></Footer>
       
      </div>
    </>
  );
}

export default Home;