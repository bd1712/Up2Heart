import React, { useState } from "react";
import { t } from "i18next";
import "./SignUpForm.scss";

import ModalUp2Heart from "../../ModalUp2Heart/ModalUp2Heart";

function SignUpForm() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="SignUpForm-Block">
      <h1 className="SignUpForm-Block__Title">{t("register.1")}</h1>

      <div className="SignUpForm-Block__Inner">
        <div className="SignUpForm-Block__Inner__External">
          <form className="SignUpForm-Block__Inner__External__From" action="/">
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("name.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__Name"
              type="name"
            />
            <br />
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("surname.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__LastName"
              type="lastname"
            />
            <br />
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("electron-email.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__Email"
              type="email"
            />
            <br />
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("phone.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__Phone"
              type="phone"
            />
            <br />
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("password-rg.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__Password"
              type="password"
            />
            <br />
            <label
              className="SignUpForm-Block__Inner__External__From__Label"
              htmlFor="#"
            >
              {t("password-confirm.1")}
            </label>
            <br />
            <input
              className="SignUpForm-Block__Inner__External__From__AgainPassword"
              type="password"
            />
            <br />

            <div className="SignUpForm-Block__Inner__External__From__CheckBox-Block">
              <input
                className="SignUpForm-Block__Inner__External__From__CheckBox-Block__CheckBox"
                type="checkbox"
                name="check"
                id="check"
              />
              <label
                className="SignUpForm-Block__Inner__External__From__CheckBox-Block__Desc"
                htmlFor="/"
                for="check"
              >
                {t("desc-confidis.1")}
              </label>
            </div>

            <button
              className="SignUpForm-Block__Inner__External__From__Button"
              type="submit"
              onClick={() => setModalActive(true)}
            >
              {t("create-account.1")}
            </button>
          </form>

          <p className="SignUpForm-Block__Inner__External__Help-Text">
            {t("problem-text.1")}
          </p>
        </div>

        <ModalUp2Heart active={modalActive} setActive={setModalActive}>
          <p className="Modal__Inner__Text">
            Вы успешно создали аккаунт в Up2heart
          </p>

          <div className="Modal__Inner__Button-Block">
            <button
              className="Modal__Inner__Button-Block__Button"
              onClick={() => setModalActive(false)}
            >
              ок
            </button>
          </div>
        </ModalUp2Heart>
      </div>
    </section>
  );
}

export default SignUpForm;
