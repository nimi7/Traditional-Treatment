import React from 'react';
import {Media} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';


export default function Utube(params) {
    const {t} = useTranslation();
    return (
        <Media style={{width: '100%', background: 'none'}}>
            
                <iframe width="500" height="350" src="https://www.youtube.com/embed/cyEmiPU-f_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
            <Media.Body>
                
                <p> {t("MeaningOfTheName.1")}
                  
    </p>
            </Media.Body>
        </Media>
    )

}