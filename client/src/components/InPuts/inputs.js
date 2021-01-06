import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import './inputs.css';
import axios from 'axios'




export default function Inputs() {
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false)

   const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    //end of handle innputs

    const formSubmit = () => {
        // e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        console.log(data);
        axios
          .post("/westaNewsLetter", data)
          .then((res) => {
            if (res.status === 200) {
              setSent(true);
              console.log(res);
            } else {
              console.log(`error code ${res.status}`);
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
        console.log('dgbfhdgngsfg');

    }

    // const resetForm = () => {
    //     setFirstName('')
    //     setLastName('')
    //     setEmail('')
    //     setSent(false)
    //     setTimeout(() => {
    //         setSent(false)
    //     }, 3000);
    // }

    return (
        <div>
            <div className="contactUs">
                <h2>{t("contactUs.1")}</h2>

                <input type='text' value={firstName}  onChange={handleFirstName} placeholder={t("contactUs.2")}/>
                <input type='text' value={lastName}  onChange={handleLastName} placeholder={t("contactUs.3")}/>
                <input type='email' value={email}  onChange={handleEmail} placeholder={t("contactUs.4")}/>
                {sent ? <div className='msg'>Message has been sent</div> : ''}
                <button type="button" class="btn btn-outline-light" onClick={formSubmit}>{t("contactUs.5")} </button>
            </div>
        </div>
    )
}