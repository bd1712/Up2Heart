import '../AdsVideo/AdsVideo.scss';

import AdsBanner from '../../../assets/images/ads-banner1.png';
import VideoImg from '../../../assets/images/video-img.png';

import { useTranslation } from 'react-i18next';

function AdsVideo() {
    const { t } = useTranslation();

    return (
        <section className='AdsVideo'>
            <div className='AdsVideo__Inner'>
                <img className='AdsVideo__Inner__Img' src={AdsBanner} alt="" />

                <h3 className='AdsVideo__Inner__WhatWork'>{t('how-working.1')}</h3>

                <img className='AdsVideo__Inner__VideoImg' src={VideoImg} alt="" />
            </div>
        </section>
    )
}

export default AdsVideo;