import React from "react";
import { useTranslation } from "react-i18next";
import Pic1 from "../../images/12.jpg";
import Pic2 from "../../images/10.jpg";
import Pic3 from "../../images/11.jpg";
import Pic4 from "../../images/13.jpg";
import Pic5 from "../../images/15.jpg";
import Pic6 from "../../images/6.jpg";
import Pic7 from "../../images/7.jpg";
import Pic8 from "../../images/8.jpg";
import Pic9 from "../../images/9.jpg";

export default function BootStrap() {
  const { t } = useTranslation();
  return (
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">{t("partTwo.1")}</h2>
          <h3 class="section-subheading text-muted">{t("partTwo.2")}</h3>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic2} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {" "}
                  {t("TerapistCenter.3")}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal2"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic1} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {" "}
                  {t("TerapistCenter.2")}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal3"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic4} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.1")}{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal4"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic3} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.6")}{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal5"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic5} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.5")}{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal6"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic6} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.4")}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic7} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.7")}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal2"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic8} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.8")}
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal3"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src={Pic9} alt="" />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">
                  {t("TerapistCenter.9")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
