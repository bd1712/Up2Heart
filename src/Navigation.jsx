import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Alakel from './components/alakelpages/Alakel'
import Sending from './components/alakelpages/Sending/Sending'
import AnnouncementCard from './components/superpapa/AnnouncementCard/AnnouncementCard'
import Iamsuperpapa from './components/superpapa/IamSuperpapa/IamSuperpapa'
import SuperPagaMainPage from './components/superpapa/MainPage/MainPage'
import NeedSuperPapa from './components/superpapa/NeedSuperPapa/NeedSuperPapa'
import Superpapa from './components/superpapa/Superpapa'
import Contacts from './pages/Contacts'
import Project from './pages/Project'
import SignUp from './pages/SignUp'
import MainPage from './pages/Main'
import MainPageAlakel from './components/alakelpages/mainpageAlakel/MainPageAlakel'


function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/alakel" element={<MainPageAlakel />} />

                <Route path="/sending" element={<Sending />} />


                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/login" element={<EntrancePage />} /> */}
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/project" element={<Project />} />
                <Route path="/superpapa" element={<Superpapa />} />
                <Route path="/iamsp" element={<Iamsuperpapa />} />
                <Route path="/announcecard" element={<AnnouncementCard />} />
                <Route path="/announcement" element={<AnnouncementCard />} />
                <Route path="/needsp" element={<NeedSuperPapa />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation