import React from 'react'
import Logo from '../Footer/Logo.jpg'
import './../Footer/footer.css'


export default function Footer() {

    return (

        <div>
            <footer class="footer">
                <div class="footer-center col-md-4 col-sm-6">
                    <p class="fa fa-phone">
                        <h1>nimrod</h1>
                       <p>  מען מכתבים     </p> <br/>
                       
                        <p>ת.ד. 5778, חדרה, 321000</p>
                    </p>
                    <div class="icons">
                       
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                  
                    <div>

                        <i class="fa fa-phone"></i>
                        <p>  Wustetsega@gmail.com : אימייל </p>
                    </div>
                    <div>

                        <i class="fa fa-phone"></i>
                        <p> 053-4220161 : טלפון </p>
                    </div>
                    <div>

                        <i class="fa fa-phone"></i>
                        <p> פקס : 077-4246845 </p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="https://www.facebook.com/wustetsega/?view_public_for=1355117517896052"> לעמוד פייסבוק שלנו</a></p>

                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                
                    <h2>   <span> ווסטה צגה (חל"צ)  </span> <img src={Logo} width='100px'/>  <br /> מרכז לפסיכותרפיה מותאמת תרבות </h2>
                    <p class="menu">
                        <a href="/"> דף הבית</a> |
                         <a href="/AboutUs"> אודותינו</a> |
                         <a href="/TherapistTraining"> הכשרת מטפלים</a> |
                         <a href="/CenterActivities"> פעילויות המרכז</a> |
                         <a href="/Donations"> תרומות</a> |
                        <a href="/ContactUs"> צור קשר</a>
                    </p>
                    <p class="name"> זכויות שמורות &copy; ווסטה צגה (חל"צ)</p>
                </div>
            </footer>




        </div>



    )
}