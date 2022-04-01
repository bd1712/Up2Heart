import { useTranslation } from "react-i18next";
import "./iamsuperpapa.scss";
import { StyledModal } from "../ModalSuperpapa/ModalSuperpapa";
import { useState } from "react";

function Iamsuperpapa() {
  const [isPopOpen, setIsPosOpen] = useState(false);

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="iamsuperpapa">
        <div className="container">
          <form className="iamsuperpapa__inner">
            <div className="iamsuperpapa__inner__header">
              <h1 className="iamsuperpapa__inner__header__h2">
                {t("superpapa.1")}
              </h1>
            </div>
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__freedays-label"
                htmlFor="howhelp"
              >
                {t("iamsptheme.1")}
              </label>
              <input
                className="iamsuperpapa__inner__item__select-select"
                type="text"
                placeholder="Тема"
              />
            </div>
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="howhelp"
              >
                {t("iamspcanhelp.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="howhelp"
                id="howhelp"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Провести день в РЦ/Подвести в школу"
                >
                  {t("iamsppsterinschool.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  Papa Super
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  Super Papa
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  Lorem Ipsum Dollar
                </option>
              </select>
            </div>

            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__freedays-label"
                htmlFor="freedays"
              >
                {t("iamspindayfree.1")}
              </label>
              <div className="iamsuperpapa__inner__item__freedays__block">
                <input
                  className="iamsuperpapa__inner__item__freedays__block__input"
                  type="date"
                  id="freedays"
                  placeholder="с"
                  required
                />
                <input
                  className="iamsuperpapa__inner__item__freedays__block__input"
                  type="date"
                  id="freedays"
                  placeholder="до"
                  required
                />
              </div>
            </div>

            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__freetime-label"
                htmlFor="freetime"
              >
                {t("iamspintimwfree.1")}
              </label>
              <div className="iamsuperpapa__inner__item__freetime__block">
                <input
                  className="iamsuperpapa__inner__item__freetime__block__input"
                  type="time"
                  id="freetime"
                  placeholder="с"
                  required
                />
                <input
                  className="iamsuperpapa__inner__item__freetime__block__input"
                  type="time"
                  id="freetime"
                  placeholder="до"
                  required
                />
              </div>
            </div>

            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="whichregion"
              >
                {t("iamspwhichrwgion.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="whichregion"
                id="whichregion"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Панфиловский район"
                >
                  Панфиловский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Жайыльский район"
                >
                  Жайыльский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Московский район"
                >
                  Московский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Сокулукский район"
                >
                  Сокулукский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Аламединский район"
                >
                  Аламединский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Чуйский район"
                >
                  Чуйский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ысык-Атинский район"
                >
                  Ысык-Атинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кеминский район"
                >
                  Кеминский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Бакай-Атинский район"
                >
                  Бакай-Атинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кара-Бууринский район"
                >
                  Кара-Бууринский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Манасский район"
                >
                  Манасский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Таласский район"
                >
                  Таласский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ак-Суйский район"
                >
                  Ак-Суйский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Джети-Огузский район"
                >
                  Джети-Огузский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Тонский район"
                >
                  Тонский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Тюпский район"
                >
                  Тюпский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Иссык-Кульский район"
                >
                  Иссык-Кульский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ак-Талинский район"
                >
                  Ак-Талинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ат-Башинский район"
                >
                  Ат-Башинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Жумгальский район"
                >
                  Жумгальский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кочкорский район"
                >
                  Кочкорский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Нарынский район"
                >
                  Нарынский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Алайский район"
                >
                  Алайский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Араванский район"
                >
                  Араванский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кара-Кулджинский район"
                >
                  Кара-Кулджинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кара-Суйский район"
                >
                  Кара-Суйский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ноокатский район"
                >
                  Ноокатский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Узгенский район"
                >
                  Узгенский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Чон-Алайский район"
                >
                  Чон-Алайский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Аксыйский район"
                >
                  Аксыйский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ала-Букинский район"
                >
                  Ала-Букинский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Базар-Коргонский район"
                >
                  Базар-Коргонский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Ноокенский район"
                >
                  Ноокенский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Сузакский район"
                >
                  Сузакский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Тогуз-Тороуский район"
                >
                  Тогуз-Тороуский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Токтогульский район"
                >
                  Токтогульский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Чаткальский район"
                >
                  Чаткальский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Баткенский район"
                >
                  Баткенский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Кадамжайский район"
                >
                  Кадамжайский район
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value="Лейлекский район"
                >
                  Лейлекский район
                </option>
              </select>
            </div>
            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="havecar"
              >
                {t("iamsphascar.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="havecar"
                id="havecar"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  disabled
                  selected
                  hidden
                >
                  {t("iamspnoyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspno.1")}
                </option>
              </select>
            </div>
            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="haveCarSeat"
              >
                {t("iamsphascarseat.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="haveCarSeat"
                id="haveCarSeat"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  disabled
                  selected
                  hidden
                >
                  {t("iamspnoyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspno.1")}
                </option>
              </select>
            </div>
            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="haveDVR"
              >
                {t("iamspthascarDVR.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="haveDVR"
                id="haveDVR"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  disabled
                  selected
                  hidden
                >
                  {t("iamspnoyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspno.1")}
                </option>
              </select>
            </div>
            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="howMuchChildren"
              >
                {t("iamsphommanychildren.1")}
              </label>
              <input
                className="iamsuperpapa__inner__item__select-select"
                name="howMuchChildren"
                id="howMuchChildren"
                type="number"
                required
              />
            </div>
            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="bringMyChildren"
              >
                {t("iamspwilltakemychikdren.1")}
              </label>
              <select
                className="iamsuperpapa__inner__item__select-select"
                name="bringMyChildren"
                id="bringMyChildren"
                required
              >
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  disabled
                  selected
                  hidden
                >
                  {t("iamspnoyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspyes.1")}
                </option>
                <option
                  className="iamsuperpapa__inner__item__select-select__options"
                  value=""
                >
                  {t("iamspno.1")}
                </option>
              </select>
            </div>

            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <div className="iamsuperpapa__inner__item__textarea">
                <label
                  className="iamsuperpapa__inner__item__textarea__label"
                  htmlFor="whyWant"
                >
                  {t("iamsptwhywanttobesp.1")}
                </label>
                <textarea
                  className="iamsuperpapa__inner__item__textarea__input"
                  name="whyWant"
                  id="whyWant"
                  required
                ></textarea>
              </div>
            </div>

            {/* ====================================================== */}
            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="howManyGeld"
              >
                {t("iamsphommuchcharge.1")}
              </label>
              <input
                className="iamsuperpapa__inner__item__select-select"
                name="howManyGeld"
                id="howManyGeld"
                type="number"
                required
              />
            </div>

            <div className="iamsuperpapa__inner__item">
              <label
                className="iamsuperpapa__inner__item__select-label"
                htmlFor="numberTel"
              >
                {t("iamspphone.1")}
              </label>
              <input
                className="iamsuperpapa__inner__item__select-select"
                name="numberTel"
                id="numberTel"
                type="tel"
                required
              />
            </div>

            <div className="iamsuperpapa__inner__item">
              <div className="iamsuperpapa__inner__item__textarea">
                <label
                  className="iamsuperpapa__inner__item__textarea__label"
                  htmlFor="brieflyAboutme"
                >
                  {t("iamsplittlebitaboutme.1")}
                </label>
                <textarea
                  className="iamsuperpapa__inner__item__textarea__input"
                  name="brieflyAboutme"
                  id="brieflyAboutme"
                  required
                ></textarea>
              </div>
            </div>

            <div className="iamsuperpapa__inner__item">
              <div className="iamsuperpapa__inner__item__rules">
                <input
                  className="iamsuperpapa__inner__item__rules__checkbox"
                  type="checkbox"
                  id="rules"
                  required
                />
                <label
                  className="iamsuperpapa__inner__item__rules__label"
                  __label
                  htmlFor="rules"
                >
                  {t("iamsprolesforsp.1")}
                </label>
              </div>
            </div>

            <div className="iamsuperpapa__inner__item">
              <div className="iamsuperpapa__inner__item__btn-block">
                <button
                  className="iamsuperpapa__inner__item__btn-block__btn"
                  type="submit"
                  onClick={() => setIsPosOpen(!isPopOpen)}
                >
                  {t("iamsppublish.1")}
                </button>
                <StyledModal
                  show={isPopOpen}
                  handleClose={() => setIsPosOpen(false)}
                >
                  <div>
                    Благодарим за использование нашей системы! Как только будет
                    получен подходящий вариант, вы будете уведомлены
                  </div>
                </StyledModal>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Iamsuperpapa;
