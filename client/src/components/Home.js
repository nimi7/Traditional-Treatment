import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Inputs from './InPuts/inputs';
import SingleTerapist from './Therapist/SingleTerapist';
import UploadImages from './uplaodImage';
import Bs from '../components/BootStrap/bs';
import Contact from '../components/BootStrap/contactUs';
import Nimrod from './BootStrap/Navbar'
import Mainpic from '../components/BootStrap/Mainpic'
import './homePage.css';
import Utube from './BootStrap/Utube'
import Footer from "../../../client/src/components/Footer/footer";
import Servisies from "../../../client/src/components/BootStrap/Servisies";

const Home = () => {
  const { t } = useTranslation();
  


  const [allImages, setAllImages] = useState([]);


  // var x = window.matchMedia("(max-width: 700px)")
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction, Event) // Attach listener function on state changes
  // function myFunction(e) {

  //   if (x.matches) {
  //     var element = document.getElementsByClassName("youtube_text_");
  //     // e.stopPropagation();
  //     // element.classList.remove( );

  //   }

  // }

  useEffect(() => {
    axios
      .get(`/westaGallery`)
      .then((res) => {
        // console.log(res.data);
        setAllImages(res.data);
        // console.log(allImages);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <section>
      {/* <Nimrod/> */}
      
      <div className="homePage">
        <div className="languageType"></div>
        <Mainpic/>
        <Bs />

        <Utube />
        <Servisies />

        {/* <img className="imageMain" src="/images/imageMain.jpg" /> */}
        {/* <div className="homeContant">
          <div className="partOne">
            <img className="mengPic" src="/images/16.jpg" />
            <p>{t("partOne.1")}</p>
          </div>
          <div className="partTwo">
            <h2>{t("partTwo.1")}</h2>
            <h5> {t("partTwo.2")} </h5>

          </div>

        </div> */}
      </div>
      <div className="contactUs">
        <Inputs />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
