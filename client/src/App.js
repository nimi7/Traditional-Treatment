import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import CenterActivities from "./components/centerActivities";
import ContactUs from "./components/contactUs";
import Donations from "./components/donations";
import Publications from "./components/publications";
import TherapistTraining from "./components/Therapist/therapistTraining";
import UploadImages from "./components/uplaodImage";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Login from "./Pages/Login";
import Footer from './components/Footer/footer'
import SignUp from "./Pages/Register";
import AdminContextProvider from "./contexts/AdminContext";
import Article from "./AdminManagementApp/Article/Article";

const App = () => {
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <div className="languageType">
        <a href="" onClick={() => handleClick("he")}>
          עברית
        </a>{" "}
        |{" "}
        <a href="" onClick={() => handleClick("en")}>
          English
        </a>
        |{" "}
        <a href="" onClick={() => handleClick("am")}>
          אמהרית
        </a>
      </div>

      <main>
        <AdminContextProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/AboutUs" render={() => <AboutUs />} />
              <Route exact path="/CenterActivities" render={() => <CenterActivities />} />
              <Route exact path="/ContactUs" render={() => <ContactUs />} />
              <Route exact path="/Donations" render={() => <Donations />} />
              <Route exact path="/Publications" render={() => <Publications />} />
              <Route exact path="/login" render={() => <Login />} />
              <Route exact path="/register" render={() => <SignUp />} />
              <Route exact path="/CenterActivities" render={() => <CenterActivities />} />
              <Route exact path="/ContactUs" render={() => <ContactUs />} />
              <Route exact path="/Donations" render={() => <Donations />} />
              <Route exact path="/Publications" render={() => <Publications />} />

              <Route exact path="/articles" render={() => <Article />} />

              <Route
                exact
                path="/TherapistTraining"
                render={() => <TherapistTraining />}
              />
            </Switch>
          </BrowserRouter>
        </AdminContextProvider>
      </main>
     
    </div>
  );
};

export default App;
