import React from "react"
import '../BootStrap/Mainpic.css'
import { Button } from 'react-bootstrap'
import dddd from '../../images/16.jpg'
import { useTranslation } from "react-i18next"

export default function MainPic() {
    const {t} = useTranslation();
    return (
        <div class="main_image" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -1}}>
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading"  >

                        {t('MainPic.1')}
                    </div>
                    <div className="mb-2">
                        <Button className='CenterButton' variant="primary" size="lg" href='/AboutUs'>
                        {t('MainPic.2')}
                        </Button>
                    </div>
                    
                    {/* <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="http://localhost:3000/AboutUs">אודות המרכז</a> */}
                </div>
            </header>


        </div>


    )
}