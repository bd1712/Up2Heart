
import "./mainPageAlakel.scss";
import { useTranslation } from 'react-i18next';
import { Link, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';


import Sending from "../Sending/Sending";
function MainPage() {
  const { t } = useTranslation();

  const [hideMenu, setHideMenu] = useState(true);
  return (
    <>
      <div className="main-page">
        <div className="main-page__special-bg"></div>
        <div className="container">
          <div className="main-page__inner">
            <div className="main-page__inner__header">
            <div className="main-page__inner__header__title">{t('alakel.1')}</div>
              <div className="main-page__inner__header__dates">
                <input
                  className="main-page__inner__header__dates__name"
                  type="text"
                  placeholder={t('placeholder.1')}
                />
                <input
                  className="main-page__inner__header__dates__date"
                  type="date"
                />
                 <input
                  className="main-page__inner__header__dates__name"
                  type="text"
                  placeholder={t('placeholdertoSend.1')}
                 
                />
                <input
                  className="main-page__inner__header__dates__search"
                  type="search"
                  placeholder={t('placeholdertoFind.1')}
                />
              </div> <div className={(hideMenu ? 'Header__Inner__Nav' : ' active')}>
              <div className="main-page__inner__header__link">
                <a className="main-page__inner__header__link__item" id="linkitem" href="/">
                {t('wantSend.1')}</a>
                {/* <Link className='main-page__inner__header__link__item' id="linkitem" to="/sending"> {t('wantSend.1')}</Link>
                <Link className='main-page__inner__header__link__item' id="linkitem" to="/project">  {t('canpickup.1')}</Link> */}
                <a className="main-page__inner__header__link__item" id="linkitem" href="/">
                {t('canpickup.1')}
                </a>
              </div>
              </div>
            </div>
            <div className="main-page__inner__body">
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name"> {t('title.1')}</h3>
                <p className="main-page__inner__body__item__location">г. Istambul </p>
                <p className="main-page__inner__body__item__time">{t('yesterday.1')}
          
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">{t('title.1')}</h3>
                <p className="main-page__inner__body__item__location">{t('location.1')} Berlin</p>
                <p className="main-page__inner__body__item__time">{t('today.1')}
              
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">{t('title.1')}</h3>
                <p className="main-page__inner__body__item__location">{t('location.1')} Düsseldorf </p>
                <p className="main-page__inner__body__item__time">{t('yesterday.1')}
                
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">{t('title.1')}</h3>
                <p className="main-page__inner__body__item__location">{t('location.1')} Franfurt am Main </p>
                <p className="main-page__inner__body__item__time">{t('today.1')}
                  
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">{t('title.1')}</h3>
                <p className="main-page__inner__body__item__location"> {t('location.1')}Los-Angelos </p>
                <p className="main-page__inner__body__item__time">
                {t('tomorrow.1')}
                </p>
              </div>
              <div className="main-page__inner__body__item">
                <div className="main-page__inner__body__item__img"></div>
                <h3 className="main-page__inner__body__item__name">{t('title.1')}</h3>
                <p className="main-page__inner__body__item__location">{t('location.1')} München </p>
                <p className="main-page__inner__body__item__time">
                {t('today.1')}
                </p>
              </div>
            </div>
          </div>
        </div>


        <Routes>
                {/* <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<EntrancePage />} />
                <Route path="/contacts" element={<Contacts />} /> */}
                <Route path="/sending" element={<Sending />} />
                {/* <Route path="/alakel" element={<Alakel />} /> */}
            </Routes>
      </div>
    </>
  );
}

export default MainPage;
