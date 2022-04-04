import "./mainPageAlakel.scss";
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Header from "../../Header/Header";
import { BottomWhiteBlock } from "../../BottomWhiteBlock";

function MainPageAlakel() {
  const { t } = useTranslation();

  const [hideMenu, setHideMenu] = useState(true);
  return (
    <div className="ala-kel-root">
      <div className="container">
        <Header headerBg={"warning"} />
        <div className="ala-kel-root__inner">
          <div className="ala-kel-root__inner__header">
            <div className="ala-kel-root__inner__header__title">{t('alakel.1')}</div>
            <div className="ala-kel-root__inner__header__dates">
              <input
                className="ala-kel-root__inner__header__dates__name"
                type="text"
                placeholder={t('placeholder.1')}
              />
              <input
                className="ala-kel-root__inner__header__dates__date"
                type="date"
              />
              <input
                className="ala-kel-root__inner__header__dates__name"
                type="text"
                placeholder={t('placeholdertoSend.1')}

              />
              <input
                className="ala-kel-root__inner__header__dates__search"
                type="search"
                placeholder={t('placeholdertoFind.1')}
              />
            </div> <div className={(hideMenu ? 'Header__Inner__Nav' : ' active')}>
              <div className="ala-kel-root__inner__header__link">
                <a className="ala-kel-root__inner__header__link__item" id="linkitem" href="/">
                  {t('wantSend.1')}</a>
                {/* <Link className='ala-kel-root__inner__header__link__item' id="linkitem" to="/sending"> {t('wantSend.1')}</Link>
                <Link className='ala-kel-root__inner__header__link__item' id="linkitem" to="/project">  {t('canpickup.1')}</Link> */}
                <a className="ala-kel-root__inner__header__link__item" id="linkitem" href="/">
                  {t('canpickup.1')}
                </a>
              </div>
            </div>
          </div>
          <div className="ala-kel-root__inner__body">
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name"> {t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location">г. Istambul </p>
              <p className="ala-kel-root__inner__body__item__time">{t('yesterday.1')}

              </p>
            </div>
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name">{t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location">{t('location.1')} Berlin</p>
              <p className="ala-kel-root__inner__body__item__time">{t('today.1')}

              </p>
            </div>
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name">{t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location">{t('location.1')} Düsseldorf </p>
              <p className="ala-kel-root__inner__body__item__time">{t('yesterday.1')}

              </p>
            </div>
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name">{t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location">{t('location.1')} Franfurt am Main </p>
              <p className="ala-kel-root__inner__body__item__time">{t('today.1')}

              </p>
            </div>
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name">{t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location"> {t('location.1')}Los-Angelos </p>
              <p className="ala-kel-root__inner__body__item__time">
                {t('tomorrow.1')}
              </p>
            </div>
            <div className="ala-kel-root__inner__body__item">
              <div className="ala-kel-root__inner__body__item__img"></div>
              <h3 className="ala-kel-root__inner__body__item__name">{t('title.1')}</h3>
              <p className="ala-kel-root__inner__body__item__location">{t('location.1')} München </p>
              <p className="ala-kel-root__inner__body__item__time">
                {t('today.1')}
              </p>
            </div>
          </div>
        </div>
        <BottomWhiteBlock bgColor={"warning"} />
      </div>
    </div>
  );
}

export default MainPageAlakel;
