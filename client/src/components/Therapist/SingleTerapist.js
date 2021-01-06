import React from 'react';
import './terampist.css';
import { Container, Row, Col, Image, Card, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/footer'
import Baboyakov from './pics/Baboyakov.png'
import GrisroNimrod from './pics/GrisroNimrod.jpg'
import MariOlman from './pics/MariOlman.jpg'
import NeiomiShmoel from './pics/NeiomiShmoel.jpg'
import RafiYungman from './pics/RafiYungman.jpg'
import YuhaiNadan from './pics/YuhaiNadan.jpg'
import { useTranslation } from "react-i18next";


export default function SingleTerapist() {

    const { t } = useTranslation();
    // (function () {
    //     ("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    // });
    return (

        <div>

            <Media>

                <Media.Body>
                    <h3>{t('Terapist.GrisroNimrod.1')}</h3>
                    <p>
                        {t('Terapist.GrisroNimrod.2')}
                    </p>
                </Media.Body>
                <img

                    className="mr-3"
                    // max-width={200} 
                     
                    style={{
                        maxHeight:"250px",
                        maxWidth:  "200px",
                      }}
                    src={GrisroNimrod}
                    alt="Generic placeholder"
                />
            </Media>


            <Media>

                <Media.Body>
                    <h3>{t('Terapist.MariOlman.1')}</h3>
                    <p>
                        {t('Terapist.MariOlman.2')}
                    </p>
                </Media.Body>
                <img
                    width={200}
                    height={250}
                    className="mr-3"
                    src={MariOlman}
                    alt="Generic placeholder"
                />
            </Media>


            <Media>

                <Media.Body>
                    <h3>{t('Terapist.NeiomiShmoel.1')}</h3>
                    <p>
                        {t('Terapist.NeiomiShmoel.2')}
                    </p>
                </Media.Body>
                <img
                    width={200}
                    height={250}
                    className="mr-3"
                    src={NeiomiShmoel}
                    alt="Generic placeholder"
                />
            </Media>


            <Media>

                <Media.Body>
                    <h3>{t('Terapist.RafiYungman.1')}</h3>
                    <p>
                        {t('Terapist.RafiYungman.2')}
                    </p>
                </Media.Body>
                <img
                    width={200}
                    height={250}
                    className="mr-3"
                    src={RafiYungman}
                    alt="Generic placeholder"
                />
            </Media>


            <Media>

                <Media.Body>
                    <h3>{t('Terapist.YuhaiNadan.1')}</h3>
                    <p>
                        {t('Terapist.YuhaiNadan.2')}
                    </p>
                </Media.Body>
                <img
                    width={200}
                    height={250}
                    className="mr-3"
                    src={YuhaiNadan}
                    alt="Generic placeholder"
                />
            </Media>



            <Media>

                <Media.Body>
                    <h3>{t('Terapist.Baboyakov.1')}</h3>
                    <p>
                        {t('Terapist.Baboyakov.2')}
                    </p>
                </Media.Body>
                <img
                    width={200}
                    height={250}
                    className="mr-3"
                    src={Baboyakov}
                    alt="Generic placeholder"
                />
            </Media>

           







        </div>


    )
}