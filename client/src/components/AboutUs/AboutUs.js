import React from "react";
import "./AboutUs.css";
import { useTranslation } from "react-i18next";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Jumbotron>
                <Container>
                    <div >
                        <img src="/images/30.jpg" alt="Girl in a jacket" width="100%" height="250px"></img>
                        <h1 dir="rtl"  className="font">{t("AboutUs.2")}</h1>

                        <div1 dir="ltl" className="explanation">
                            <img className="mengPic" src="/images/16.jpg" alt="" />
                            <p>{t("partOne.1")}</p>
                        </div1>
                        <div dir="rtl"  className="font">
                            <p>{t("AboutUs.1")} </p>
                            <br />
                            <br />
                            <p>{t("AboutUs.6")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.7")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.8")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.9")}</p>
                            <br />
                            <br />
                            <h1>{t("AboutUs.10")}</h1>
                            <br />
                            <br />
                            <h5>{t("AboutUs.11")}</h5>
                            <br />
                            <br />
                            <p>{t("AboutUs.12")}</p>
                            <br />
                            <br />
                            <h5>{t("AboutUs.13")}</h5>
                            <br />
                            <br />
                            <p>{t("AboutUs.14")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.15")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.16")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.17")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.17")}</p>
                            <br />
                            <br />
                            <h5>{t("AboutUs.18")}</h5>
                            <br />
                            <br />
                            <p>{t("AboutUs.19")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.20")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.21")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.22")}</p>
                            <br />
                            <br />
                            <p>{t("AboutUs.21")}</p>
                            <br />
                            <br />
                            <h5>{t("AboutUs.23")}</h5>
                            <br />
                            <br />
                            <p>{t("AboutUs.24")}</p>
                            <a href={t("AboutUs.25")}>קישור: https://nevetgreenhouse.huji.ac.il/</a>
                            <br />
                            <br />
                            <p>{t("AboutUs.26")}</p>
                            <a href={t("AboutUs.27")}>קישור: http://www.tene-briut.org.il/ </a>
                            <br />
                            <br />
                        </div>
                        <div className="contactUs">
                            <h2>{t("contactUs.1")}</h2>

                        </div>
                        <div className="contactUs">
                            <h2>{t("contactUs.1")}</h2>
                            <input type='text' value={t("contactUs.2")} />
                            <input type='text' value={t("contactUs.3")} />
                            <input type='email' value={t("contactUs.4")} />
                            <button type="button" class="btn btn-outline-light">{t("contactUs.5")} </button>
                        </div>
                    </div>


                </Container>

            </Jumbotron>



        </div>
    )





}

export default AboutUs;




