import React from 'react';
import Footer from '../Footer/footer'
import {useTranslation} from 'react-i18next'
import Baboyakov from '../Therapist/pics/Baboyakov.png'
import GrisroNimrod from '../Therapist/pics/GrisroNimrod.jpg'
import MariOlman from '../Therapist/pics/MariOlman.jpg'
import NeiomiShmoel from '../Therapist/pics/NeiomiShmoel.jpg'
import RafiYungman from '../Therapist/pics/RafiYungman.jpg'
import YuhaiNadan from '../Therapist/pics/YuhaiNadan.jpg'


export default function Servisess(params) {
    const { t } = useTranslation();
   
    return (
        <div>



        
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">{t('Terapist.Title.1')}</h2>
                    <h3 class="section-subheading text-muted">{t('Terapist.Title.2')}</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>

                            <img style={{width:'111%',marginbottom : '79%',borderRadius:'100px'}} src={GrisroNimrod} alt="" />
                        </span>
                        <h4 class="my-3">{t('Terapist.GrisroNimrod.1')}</h4>
                        <p class="text-muted">{t('Terapist.GrisroNimrod.2')}</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>
                        <img style={{width:'111%',marginbottom : '79%',borderRadius:'100px'}} src={YuhaiNadan} alt="" />
                        </span>
                        <h4 class="my-3">{t('Terapist.YuhaiNadan.1')}</h4>
                        <p class="text-muted">{t('Terapist.YuhaiNadan.2')}</p>
                    </div>
                   
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>
                        <img style={{width:'111%',marginbottom : '79%',borderRadius:'100px'}} src={NeiomiShmoel} alt="" />
                        </span>
                        <h4 class="my-3">{t('Terapist.NeiomiShmoel.1')}</h4>
                        <p class="text-muted"> {t('Terapist.NeiomiShmoel.2')}</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>
                        <img style={{width:'95%',marginbottom : '79%',borderRadius:'100px'}} src={RafiYungman} alt="" />
                        </span>
                        <h4 class="my-3">{t('Terapist.RafiYungman.1')}</h4>
                        <p class="text-muted">{t('Terapist.RafiYungman.2')}</p>
                    </div>
                  
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>
                        <img className='Servesies' style={{width:'111%',borderRadius:'100px'}} src={MariOlman} alt="" />
                        </span>
                        <h4 class="my-3">{t('Terapist.MariOlman.1')}</h4>
                        <p class="text-muted">{t('Terapist.MariOlman.2')}</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x" style={{height: '4em'}}>
                        <img className='Servesies' style={{ width: '78%', borderRadius:'100px', maxHeight   : '170px'}} src={Baboyakov} alt="" />
                        </span>
                        <h4 class="my-3 ">{t('Terapist.Baboyakov.1')}</h4>
                        <p class="text-muted">{t('Terapist.Baboyakov.2')}</p>
                    </div>
                </div>
            </div>
        </section>
        
        </div>
    )

}