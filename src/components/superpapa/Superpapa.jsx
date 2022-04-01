import React from "react";

// import FooterSuperpapa from "./FooterSuperpapa/FooterSuperpapa";
// import HeaderSuperpapa from "./HeaderSuperpapa/HeaderSuperpapa";
 import MainPage from "./MainPage/MainPage";
 import IamSuperpapa from "./IamSuperpapa/IamSuperpapa";
 import NeedSuperPapa from "./NeedSuperPapa/NeedSuperPapa";
 import { Route, Routes } from "react-router-dom";
 import AnnouncementCard from "./AnnouncementCard/AnnouncementCard";
//  import NotificationSP from "./NotificationSP/NotificationSP";

function Superpapa() {
  return (
    <>
      {/* <MainPage /> */}
      {/* <IamSuperpapa /> */}
      {/* <NeedSuperPapa /> */}
      {/* <AnnouncementCard />  */}
      {/* <HeaderSuperpapa /> */}
      {/* <FooterSuperpapa /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/iamsp" element={<IamSuperpapa />} />
        <Route path="/needsp" element={<NeedSuperPapa />} />
        <Route path="/announcecard" element={<AnnouncementCard />} />
      </Routes>
    </>
  );
}

export default Superpapa;
