

import './CardOfAnnouncement.scss';
import { useState } from 'react';
import CardOfAnnouncement1 from './CardOfAnnouncement1';
import { useTranslation } from 'react-i18next';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function CardOfAnnouncement(){
    const { t } = useTranslation();
    
    function Popup(props) {
     
       return (props.trigger) ?(
           <div className="popup">
               <div className="popup-inner">
                   <button className="close-btn" onClick={()=> props.setTrigger(false)}>{t('close.1')}</button>
                   {props.children}
               </div>
           </div>
       ) :"";
      }


 const [buttonPopup, setButtonPopup]=useState(false);
 const [buttonPhone, setButtonPhone]=useState(false);
 const [buttonRate, setButtonRate]=useState(false);


    return(
       
        <div className="CardOfAnnouncement">
        <div className='CardOfAnnouncement__container'>
      
        <div className='CardOfAnnouncement__container__img-holder'>
            <div className='img-holder'><CardOfAnnouncement1/></div>
        </div> 
    
        <div className="CardOfAnnouncement__container__card">{t('nameOfAlakel.1')}</div>
        <div className='CardOfAnnouncement__container__name'>{t('name.1')}</div>
        <div className='CardOfAnnouncement__container__round'>{t('rating.1')}</div>

        <button onClick={()=> setButtonRate(true)} className="CardOfAnnouncement__container__rate" to="/messange">{t('rate.1')}</button>
        <div className='CardOfAnnouncement__container__thema'>
            <h4 className='thema'>{t('adThema.1')}</h4>
            <h4 className='Ad' >{t('adText.1')}</h4>
        </div>
       <main> 
       <button onClick={()=> setButtonPhone(true)} className="CardOfAnnouncement__container__phone" to="/phone">{t('showNumber.1')}</button>
        <button onClick={()=> setButtonPopup(true)} className="CardOfAnnouncement__container__messange" to="/messange">{t('showMessage.1')}</button>
     </main>  
   </div>
     <Popup trigger = {buttonRate} setTrigger={setButtonRate}>
           <h3>{t('question.1')}</h3>
            <label className="containerLabel">{t('answer1.1')} 
            <input type="radio" checked="checked" name="radio" id='input'/>
            <span className="checkmark"></span></label>
            <label class="containerLabel" for="two">{t('answer2.1')} 
            <input type="radio" name="radio" id='input'/>
            <span class="checkmark"></span>
            </label>
            <label class="containerLabel">{t('answer3.1')} 
            <input type="radio" name="radio" id='input'/>
            <span class="checkmark"></span>
            </label>
            <label class="containerLabel"> {t('answer4.1')} 
            <input type="radio" name="radio" id='input'/>
            <span class="checkmark"></span>
            </label>
            <h3 className='star'>{t('UserRainting.1')}</h3>

            <div class="rating">
           <input type="radio" name="html"/> 
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                <input type="radio" name="html"/>
                </div> 
                  <form>
                <h3>{t('comments.1')}</h3>
                 <textarea ></textarea>
                 <button className='send'>{t('send.1')}</button>
             </form>
        </Popup>

        <Popup trigger = {buttonPhone} setTrigger={setButtonPhone}>
        <h3>+49 12367 18394 3945</h3>
        </Popup>

        <Popup trigger = {buttonPopup} setTrigger={setButtonPopup}>
         <div className='pop2'>
        <h3>{t('myMessage.1')}</h3>
             <form>
                 <textarea placeholder={t('showMessage.1')}></textarea>
                 <button className='send'>{t('send.1')}</button>
             </form></div>
        </Popup>

   
        </div>
    )
}


export default CardOfAnnouncement;