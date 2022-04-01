import React, { useState } from 'react';
import { t } from 'i18next';
import './ContactsForm.scss';

import ModalUp2Heart from '../../ModalUp2Heart/ModalUp2Heart';

function ContactsForm() {

    const [modalActive, setModalActive] = useState(true);

    return (
        <section className='ContactsForm-Block'>
            <div className='ContactsForm-Block__Inner'>
                <h2 className='ContactsForm-Block__Inner__Title'>{t('please-write.1')}</h2>

                <form className='ContactsForm-Block__Inner__Form'>
                    <label className='ContactsForm-Block__Inner__Form__Label' htmlFor="#">{t('fio.1')}</label>
                    <br />
                    <input className='ContactsForm-Block__Inner__Form__Input-Name' type="text" name="name" id="name" />
                    <br />
                    <label className='ContactsForm-Block__Inner__Form__Label' htmlFor="#">{t('contact-email.1')}</label>
                    <br />
                    <input className='ContactsForm-Block__Inner__Form__Input-Email' type="email" name="email" id="email" />
                    <br />
                    <label className='ContactsForm-Block__Inner__Form__Label' htmlFor="#">{t('contact-phone.1')}</label>
                    <br />
                    <input className='ContactsForm-Block__Inner__Form__Input-Phone' type="text" name="phone" id="phone" />
                    <br />
                    <label className='ContactsForm-Block__Inner__Form__Label' htmlFor="#">{t('contact-appeal.1')}</label>
                    <br />
                    <textarea className='ContactsForm-Block__Inner__Form__Input-Message' name="message" id="message" cols="30" rows="10"></textarea>
                    <br />
                    <button className='ContactsForm-Block__Inner__Form__Button' type='submit' onClick={() => setModalActive(true)}>{t('send.1')}</button>
                </form>
            </div>

            <ModalUp2Heart  active={modalActive} setActive={setModalActive}>
                    <p className='Modal__Inner__Text'>Благодарим Вас за обращение! Мы вернемся с ответом в кратчайшие сроки.</p>

                    <div className='Modal__Inner__Button-Block'>
                        <button className='Modal__Inner__Button-Block__Button' onClick={() => setModalActive(false)}>ок</button>
                    </div>
                </ModalUp2Heart>
        </section>
    )
}

export default ContactsForm;