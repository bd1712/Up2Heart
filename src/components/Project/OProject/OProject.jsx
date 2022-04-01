import './OProject.scss';

import { useState } from 'react';
import { t } from 'i18next';

function OProject() {
    
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className='OProject'>
                    <div className='OProject__Inner'>
                        <div className='OProject__Inner__Hel'>
                            <h3 className='OProject__Inner__Hel__Title'>{t('our-goal.1')}</h3>

                            <p className='OProject__Inner__Hel__Text'>{t('our-goal-desc.1')}</p>
                        </div>

                        <div className='OProject__Inner__Misson'>
                            <h3 className='OProject__Inner__Misson__Title'>{t('our-mission.1')}</h3>

                            <p className='OProject__Inner__Misson__Text'>{t('our-mission-desc.1')}</p>
                        </div>

                        <div className='OProject__Inner__Block-PR'>
                            <h4 className='OProject__Inner__Block-PR__Text'>{t('about-project.1')}</h4>
                            <h4 className='OProject__Inner__Block-PR__Text'>{t('about-project.1')}</h4>
                            <h4 className='OProject__Inner__Block-PR__Text'>{t('about-project.1')}</h4>
                            <h4 className='OProject__Inner__Block-PR__Text'>{t('about-project.1')}</h4>
                        </div>

                        <div className='OProject__Inner__Tabs-FN'>
                            <div className='OProject__Inner__Tabs-FN__Sircle-Blocks'>
                                <div className={toggleState === 1 ? "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse active-tabs" : "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse"} onClick={() => toggleTab(1)}></div>
                                <span className='Arrow'>→</span>
                                <div className={toggleState === 2 ? "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse active-tabs" : "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse"} onClick={() => toggleTab(2)}></div>
                                <span className='Arrow'>→</span>
                                <div className={toggleState === 3 ? "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse active-tabs" : "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse"} onClick={() => toggleTab(3)}></div>
                                <span className='Arrow'>→</span>
                                <div className={toggleState === 4 ? "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse active-tabs" : "OProject__Inner__Tabs-FN__Sircle-Blocks__Ellipse"} onClick={() => toggleTab(4)}></div>
                            </div>

                            <div className='OProject__Inner__Tabs-FN__Content'>
                                <div className={toggleState === 1 ? "OProject__Inner__Tabs-FN__Content__Block-Info active-content" : "OProject__Inner__Tabs-FN__Content__Block-Info"}>
                                    <h2 className='OProject__Inner__Tabs-FN__Content__Block-Info__Title'>{t('alakel.1')}</h2>
                                    <span className='Arrow-Tabs'>→</span>
                                    <p className='OProject__Inner__Tabs-FN__Content__Block-Info__Prg'>{t('text-alakel.1')}</p>
                                </div>

                                <div className={toggleState === 2 ? "OProject__Inner__Tabs-FN__Content__Block-Info active-content" : "OProject__Inner__Tabs-FN__Content__Block-Info"}>
                                    <h2 className='OProject__Inner__Tabs-FN__Content__Block-Info__Title'>{t('up2heart.1')}</h2>
                                    <span className='Arrow-Tabs'>→</span>
                                    <p className='OProject__Inner__Tabs-FN__Content__Block-Info__Prg'>{t('text-up2heart.1')}</p>
                                </div>

                                <div className={toggleState === 3 ? "OProject__Inner__Tabs-FN__Content__Block-Info active-content" : "OProject__Inner__Tabs-FN__Content__Block-Info"}>
                                    <h2 className='OProject__Inner__Tabs-FN__Content__Block-Info__Title'>{t('superpap.1')}</h2>
                                    <span className='Arrow-Tabs'>→</span>
                                    <p className='OProject__Inner__Tabs-FN__Content__Block-Info__Prg'>{t('text-superpap.1')}</p>
                                </div>

                                {/* <div className={toggleState === 4 ? "OProject__Inner__Tabs-FN__Content__Block-Info active-content" : "OProject__Inner__Tabs-FN__Content__Block-Info"}>
                                    <h2 className='OProject__Inner__Tabs-FN__Content__Block-Info__Title'>{t('alakel.1')}</h2>
                                    <span className='Arrow-Tabs'>→</span>
                                    <p className='OProject__Inner__Tabs-FN__Content__Block-Info__Prg'>{t('text-alakel.1')}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default OProject;