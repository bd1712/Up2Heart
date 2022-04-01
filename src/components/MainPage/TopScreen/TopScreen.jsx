import '../TopScreen/TopScreen.scss';

import AdsBanner from '../../../assets/images/top-banner.jpg';
import TopScreenImg from '../../../assets/images/top-screen-img.png';

import { useTranslation } from 'react-i18next';

function TopScreen() {
    const { t } = useTranslation();

    return (
        <section className='TopScreen'>
            <div className='TopScreen__Inner'>
                <img className='TopScreen__Inner__Banner' src={AdsBanner} alt="" />

                <div className='TopScreen__Inner__About-Content'>
                    <p className='TopScreen__Inner__About-Content__Text'>{t('about-text.1')}</p>

                    <img className='TopScreen__Inner__About-Content__Img' src={TopScreenImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TopScreen;