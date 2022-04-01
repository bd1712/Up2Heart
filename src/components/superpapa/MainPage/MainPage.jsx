import React from "react";
import "./mainpage.scss";
import { useTranslation } from "react-i18next";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Iamsuperpapa from "../IamSuperpapa/IamSuperpapa";
import NeedSuperPapa from "../NeedSuperPapa/NeedSuperPapa";
function MainPage() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  handleClick();

  let navigate = useNavigate();

  return (
    <>
      <div className="main-page">
        <div className="container">
          <div className="main-page__inner">
            <div className="main-page__inner__header">
              <div className="main-page__inner__header__heading">
                <h1 className="main-page__inner__header__heading__h2">
                  {t("superpapa.1")}
                </h1>
              </div>
              <div className="main-page__inner__header__dates">
                <input
                  className="main-page__inner__header__dates__name"
                  type="text"
                  placeholder="Папа/Ребенок"
                />
                <input
                  className="main-page__inner__header__dates__date"
                  type="date"
                />
                <input
                  className="main-page__inner__header__dates__search"
                  type="search"
                  placeholder="Найти"
                />
              </div>
              <div className="main-page__inner__header__link">
                <NavLink
                  className="main-page__inner__header__link__item"
                  to="/iamsp"
                >
                  {t("mainspiamsp.1")}
                </NavLink>
                <NavLink
                  className="main-page__inner__header__link__item"
                  to="/needsp"
                >
                  {t("mainspsearchsp.1")}
                </NavLink>
              </div>
              <Routes>
                <Route path="/iamsp" element={<Iamsuperpapa />} />
                <Route path="/needsp" element={<NeedSuperPapa />} />
              </Routes>
            </div>
            <div className="main-page__inner__body">
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">
                  {t("mainspname.1")}
                </h3>
                <p className="main-page__inner__body__item__location">
                  {t("mainsplocation.1")}
                </p>
                <p className="main-page__inner__body__item__time">
                  {t("mainspdate.1")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
