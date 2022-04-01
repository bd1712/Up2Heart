import '../Services/Services.scss';

import ServicesImg1 from '../../../assets/images/services-img1.png';
import ServicesImg2 from '../../../assets/images/services-img2.png';

import { Link, Routes, Route } from 'react-router-dom';

import Superpapa from '../../superpapa/Superpapa';
import Alakel from '../../alakelpages/Alakel';

import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    return (
        <section className='Services'>
            <div className='Services__Inner'>
                <h2 className='Services__Inner__Title'>{t('choose-services.1')}</h2>

                <dir className='Services__Inner__First-Blue-Block'>
                    <Link className='Services__Inner__First-Blue-Block__Link' to="/alakel">
                        <div className='Services__Inner__First-Blue-Block__Block'>
                            <h3 className='Services__Inner__First-Blue-Block__Block__Text'>Ала кел</h3>

                            <img className='Services__Inner__First-Blue-Block__Block__Img1' src={ServicesImg1} alt="" />
                        </div>
                    </Link>

                    <Link className='Services__Inner__First-Blue-Block__Link' to="/superpapa">
                        <div className='Services__Inner__First-Blue-Block__Block'>
                            <h3 className='Services__Inner__First-Blue-Block__Block__Text'>Супер Папа</h3>

                            <img className='Services__Inner__First-Blue-Block__Block__Img2' src={ServicesImg2} alt="" />
                        </div>
                    </Link>
                </dir>

                <dir className='Services__Inner__Second-Yellow-Block'>
                    <a className='Services__Inner__Second-Yellow-Block__Link' href="/">
                        <div className='Services__Inner__Second-Yellow-Block__Block'>
                        </div>
                    </a>

                    <a className='Services__Inner__Second-Yellow-Block__Link' href="/">
                        <div className='Services__Inner__Second-Yellow-Block__Block'>
                        </div>
                    </a>
                </dir>
            </div>

            <Routes>
                <Route path="/superpapa" element={<Superpapa />} />
                <Route path="/alakel" element={<Alakel />} />
            </Routes>
        </section>
    )
}

export default Services;