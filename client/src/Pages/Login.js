import React, { useContext, useState } from 'react';
import './login.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {AdminContext} from "../contexts/AdminContext";

 const Login = () => {
  
  const history = useHistory()
  const { signIn, emailChangeHandler, passwordChangeHandler } = useContext(AdminContext)




  return (
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="user_card">
          <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
              <img src="images/logo_wz-03-02.jpg" class="brand_logo" alt="Logo" />
            </div>
          </div>
          <div class="d-flex justify-content-center form_container">
            <form>
              <div class="input-group mb-3">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input onChange={(e) =>  emailChangeHandler(e) } type="text" name="Email" class="form-control input_user" placeholder="Email" />
              </div>
              <div class="input-group mb-2">
                <div class="input-group-append">
                  <span class="input-group-text"><i class="fas fa-key"></i></span>
                </div>
                <input onChange={(e) =>  passwordChangeHandler(e) } type="password" name="password" class="form-control input_pass" placeholder="Password" />
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customControlInline" />
                  <label class="custom-control-label" for="customControlInline">Remember me</label>
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3 login_container">
                <button onClick={() =>  signIn() } type="button" name="button" class="btn login_btn">Login</button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login;