import "./AnnouncementCard.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyledModal } from "../ModalSuperpapa/ModalSuperpapa";

function AnnouncementCard() {
  const [isPopOpen, setIsPosOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <div className="announcementcard">
        <div className="container">
          <div className="announcementcard__inner">
            <div className="announcementcard__inner__top">
              <div className="announcementcard__inner__top__avatarca"></div>
              <div className="announcementcard__inner__top__userinfo">
                <h2 className="announcementcard__inner__top__userinfo__idcard">
                  {t("announcementcardcardsp.1")}
                </h2>
                <h2 className="announcementcard__inner__top__userinfo__username">
                  {t("announcementcardname.1")}
                </h2>
                <h2 className="announcementcard__inner__top__userinfo__raiting">
                  {t("announcementcardraiting.1")}
                </h2>
                <button
                  className="announcementcard__inner__top__userinfo__giveball"
                  type="submit"
                  onClick={() => setIsPosOpen(!isPopOpen)}
                >
                  {t("announcementcardraiteuser.1")}
                </button>
              </div>
            </div>
            <div className="announcementcard__inner__medium">
              <p className="announcementcard__inner__medium__themeannounc">
                {t("announcementcardthemeannounc.1")}
              </p>
              <p className="announcementcard__inner__medium__textannounc">
                {t("announcementcardtextannounc.1")}
              </p>
            </div>
            <div className="announcementcard__inner__bottom">
              <button className="announcementcard__inner__bottom__btn">
                {t("announcementcardshowphone.1")}
              </button>
              <button className="announcementcard__inner__bottom__btn">
                {t("announcementcardwritemessage.1")}
              </button>
            </div>
          </div>
          <StyledModal show={isPopOpen} handleClose={() => setIsPosOpen(false)}>
            <div>
              Благодарим за использование нашей системы! Как только будет
              получен подходящий вариант, вы будете уведомлены
            </div>
          </StyledModal>
        </div>
      </div>
    </>
  );
}

export default AnnouncementCard;
