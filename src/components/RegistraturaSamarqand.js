
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import '../styles/doc.css'
import '../styles/clinika.css'
import Yomon from '../image/yomon.svg'
import Orta from '../image/orta.svg'
import Alo from '../image/alo.svg'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import ReactInputMask from 'react-input-mask';
import Cheskbox from './Cheskbox';
import send from '../image/send.png'


const ClinikaSamarqand = () => {
    const { t } = useTranslation()
    console.log("klinika")
    const [anonim, setAnonim] = useState(false)
    const [text, setText] = useState('')
    const [phone, setPhone] = useState('')
    const [moods3, setSanitar] = useState("")
    const [moods, setXizmat] = useState('')
    const  [moods1, setSalohiyat] = useState('') 
 

    

    const sendMessage = async (e) => {
        e.preventDefault();
        let token = "5797224205:AAEjK8iJQ5QtWnZtL4mkOVuzmghtRikCFYs"
        let chatID = "-652117079";
        let message = `<b>📬 Planbaby_Otziv</b>%0A<b>👤 Xizmat ko'rsatish: </b><i>${moods}</i>%0A<b>👤 Xodimlarni salohiyatini: </b><i>${moods1}</i>%0A<b>👤 Sanitarik holati: </b><i>${moods3}</i>%0A<b>👤 Izoh: </b><i>${text}</i>%0A<b>Anonimligi:</b><i>${anonim}</i>${!anonim ? `%0A<b>📞 Tel raqami: </b><i>${phone}</i>` : ''}`;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;
        let apibot = new XMLHttpRequest();
        apibot.open("GET", url, true);


        if (text.length > 0 && (phone.length > 0 || anonim)) {
            apibot.send();
            setPhone('')
            setText('')
            setSalohiyat('')
            setSanitar('')
            setXizmat('')
            setAnonim(false)
        }
    }
    return (
        <>
            <div className='doctor container'>
                <h4>{t('doctor.service')}</h4>
                <div className='doc_card1'>
                    <h3 className='card-text'><span>1.</span>{t('doctor.first')}</h3>
                    <div className='moods'>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice13" name='moods' className='inputs' value="Yomon" checked={moods === "Yomon"} onChange={(e) => setXizmat(e.target.value)} />
                            <label htmlFor='contactChoice13' className='label'>
                                <img src={Yomon} alt='yomon' />
                                <h3 className='moods-text'>{t('doctor.yomon')}</h3>
                            </label>
                        </div>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice23" name='moods' className='inputs' value="O'rta" checked={moods === "O'rta"} onChange={(e) => setXizmat(e.target.value)}/>
                            <label htmlFor='contactChoice23' className='label'>
                                <img src={Orta} alt='orta' />
                                <h3 className='moods-text'>{t('doctor.orta')}</h3>
                            </label>
                        </div>
                        <div className='moods-item' >
                            <input type='radio' id="contactChoice33" name='moods' className='inputs' value="A'lo" checked={moods === "A'lo"} onChange={(e) => setXizmat(e.target.value)}/>
                            <label htmlFor='contactChoice33' className='label'>
                                <img src={Alo} alt='alo' />
                                <h3 className='moods-text'>{t('doctor.alo')}</h3>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='doc_card1'>
                    <h3 className='card-text'><span>2.</span> {t('doctor.second')}</h3>
                    <div className='moods'>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice12" name='moods1' className='inputs' value="Yomon" checked={moods1 === "Yomon"} onChange={(e) => setSalohiyat(e.target.value)} />
                            <label htmlFor='contactChoice12' className='label'>
                                <img src={Yomon} alt='yomon' />
                                <h3 className='moods-text'>{t('doctor.yomon')}</h3>
                            </label>
                        </div>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice22" name='moods1' className='inputs' value="O'rta" checked={moods1 === "O'rta"} onChange={(e) => setSalohiyat(e.target.value)}/>
                            <label htmlFor='contactChoice22' className='label'>
                                <img src={Orta} alt='orta' />
                                <h3 className='moods-text'>{t('doctor.orta')}</h3>
                            </label>
                        </div>
                        <div className='moods-item' >
                            <input type='radio' id="contactChoice32" name='moods1' className='inputs' value="A'lo" checked={moods1 === "A'lo"} onChange={(e) => setSalohiyat(e.target.value)}/>
                            <label htmlFor='contactChoice32' className='label'>
                                <img src={Alo} alt='alo' />
                                <h3 className='moods-text'>{t('doctor.alo')}</h3>
                            </label>
                        </div>
                    </div> 
                </div>
                <div className='doc_card1'>
                    <h3 className='card-text'><span>3.</span> {t('doctor.third')}</h3>
                    <div className='moods'>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice133" name='moods3' value='Yomon' checked={moods3 === "Yomon"} className='inputs'  onChange={(e) => setSanitar(e.target.value)}/>
                            <label htmlFor='contactChoice133' className='label'>
                                <img src={Yomon} alt='yomon' />
                                <h3 className='moods-text'>{t('doctor.yomon')}</h3>
                            </label>
                        </div>
                        <div className='moods-item'>
                            <input type='radio' id="contactChoice233" name='moods3' className='inputs' value="O'rta" checked={moods3 === "O'rta"} onChange={(e) => setSanitar(e.target.value)}/>
                            <label htmlFor='contactChoice233' className='label'>
                                <img src={Orta} alt='orta' />
                                <h3 className='moods-text'>{t('doctor.orta')}</h3>
                            </label>
                        </div>
                        <div className='moods-item' >
                            <input type='radio' id="contactChoice333" name='moods3' className='inputs' value="A'lo" checked={moods3 === "A'lo"} onChange={(e) => setSanitar(e.target.value)}/>
                            <label htmlFor='contactChoice333' className='label'>
                                <img src={Alo} alt='alo' />
                                <h3 className='moods-text'>{t('doctor.alo')}</h3>
                            </label>
                        </div>
                    </div>  
                </div>
                <form onSubmit={sendMessage}>
                    <div className='form_card'>
                        <label>{t('doctor.comment')}</label>
                        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <Cheskbox anonim={anonim} setAnonim={setAnonim} />
                        <h2 className='anonim'>{t('doctor.anonim')}</h2>
                        <h2 className='num'>{t('doctor.phone')}</h2>
                        {anonim ?
                            null
                            :
                            <ReactInputMask placeholder='+998 XX XXX XX XX' required mask="+\9\9\8 (99) 999-99-99" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        }
                    </div>
                    <button className='button'><img src={send} alt='' />{t('doctor.send')}</button>
                </form>
                <ul className='socials'>
                    <li className='social'><a href='https://www.facebook.com/PlanBaby_Clinic-100915072467517/'><FaFacebook className='social-item' /></a></li>
                    <li className='social'><a href='https://www.instagram.com/planbaby_clinic/'><FaInstagram className='social-item' /></a></li>
                    <li className='social'><a href='https://t.me/Planbaby_clinic'><FaTelegram className='social-item' /></a></li>
                </ul>
            </div>
        </>
    );
};

export default ClinikaSamarqand;