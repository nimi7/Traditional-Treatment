import React from "react";
import { useTranslation } from "react-i18next";

export default function CootStrap() {
  const { t } = useTranslation();
  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">{t("KeepInTouch.1")}</h2>
        </div>
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder={t("KeepInTouch.2")}
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder={t("KeepInTouch.3")}
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group mb-md-0">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder={t("KeepInTouch.4")}
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea
                  class="form-control"
                  id="message"
                  placeholder={t("KeepInTouch.5")}
                  required="required"
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div id="success"></div>
            <button
              class="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              {t("KeepInTouch.6")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
