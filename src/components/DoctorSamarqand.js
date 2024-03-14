import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Cheskbox from './Cheskbox';
import ReactInputMask from 'react-input-mask';
import send from '../image/send.png';
import Smile from '../image/smile.png';
import Cubic from '../image/cub.png';
import Perfect from '../image/perfect.png';
import Smile1 from '../image/smile1.png';
import Cubic1 from '../image/cub1.png';
import Perfect1 from '../image/perfect1.png';
import Rate from './Rate';
import image from '../image/boydoc.png'
import image1 from '../image/girldoc.png'
import Star from '../image/star.png.png'
import EmptyStar from '../image/emptystar.png'
import Rating from 'react-rating'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
// import {  Modal } from 'antd';
// import 'antd/dist/antd.css'

export default function DoctorsSamarqand({  job }) {
    const { t } = useTranslation()
    const posts = {
        "62dbb9ce7f0052a731f9d291": t('doctor.jobNevrapatolog'),
        "62de5439e419cc5fafaebd7a": t('doctor.jobUzi'),
        "62de5478e419cc5fafaebd7e": t('doctor.jobMassaj'),
        "62de549ee419cc5fafaebd80": t('doctor.jobPediatr'),
        "62de550bc61ee18b979a24a1": t('doctor.joblabarant'),
        "62de53efe419cc5fafaebd78": t('doctor.jobginekolog'),
        "62de53c5e419cc5fafaebd76": t('doctor.joburolog'),
        "63008d06ea69c8152ca40a05": t('doctor.joburologuzd')
    }

    const [ doc, setDoc ] = useState({
        name: "",
        job: "",
        rating: 0,
        skill: 0,
        gender: ""
    })
    // const success = () => {
    //     Modal.success({
    //       content: 'Bildirgan izohingiz uchun rahmat!',
    //     });
    //   };
    const { id } = useParams()
    const [smile, setSmile] = useState(false)
    const [anonim, setAnonim] = useState(false) 
    const [text, setText] = useState('')
    const [phone, setPhone] = useState('')
    const [num, setNum] = useState (0)
    const [card, setCard] = useState(false)
    const [card1, setCard1] = useState(false)
    const [card2, setCard2] = useState(false)


    // const go = card ? (smile ? 'x': "q") : ''


    
      const serverHost = 'https://api.planbabyclinic.com';
    //   const serverHost = 'http://localhost:4002';
    const sendMessage = async (e) => {
        e.preventDefault();
        let token = "5797224205:AAEjK8iJQ5QtWnZtL4mkOVuzmghtRikCFYs"
        let chatID = "-652117079";
        let message = `<b>📬 Planbaby_Otziv</b>%0A<b>👤 Ismi: </b><i>${doc.name}</i>%0A<b>👤 Bahosi: </b><i>${num}</i>%0A<b>👤 Izoh: </b><i>${text}</i>%0A<b>👤 Doktor fe'li: </b><i>${card ? (smile ? t('doctor.doc1'): t('doctor.doc')) : '-'}</i>%0A<b>👤 Mutaxassis malakasi: </b><i>${card1 ? (smile ? t('doctor.exp'): t('doctor.notexp')) : '-'}</i>%0A<b>👤 Xizmat ko'rsatish: </b><i>${card2 ? (smile ? t('doctor.staff1'): t('doctor.staff')) : '-'}</i>${!anonim ? `%0A<b>📞 Tel raqami: </b><i>${phone}</i>` : ''}%0A<b> Anonimligi: </b><i>${anonim}</i>`;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;
        let apibot = new XMLHttpRequest();
        apibot.open("GET", url, true);
        sendRating(id, num)

        if(text.length > 0 && (phone.length > 0 || anonim)) {
            apibot.send();
            setPhone('')
            setText('')
            setSmile(false)
            setNum(0)
            setCard(false)
            setCard1(false)
            setCard2(false)
        }
    }

    const getData = () => {
        axios
            .get(`${serverHost}/doctor/${id}`)
            .then(({data}) => {
                setDoc({ 
                    name: data.name,
                    skill: data.skill,
                    job: data.job,
                    rating: data.rating,
                    gender: data.gender
                 })
            })
    }

    const sendRating = (id, rating) => {
        axios
            .put(`${serverHost}/doctor/`, {
                _id: id,
                rating
            })
            .then((data) => {
                console.log(data);
                getData()
            })
    }

    useEffect(() => {
        getData()
       
    }, [])
    
    
    return (
        <div className='doctor container'>
            <h4>{t('doctor.service')}</h4>
            <div className='doc_card'>
                <div className='person'>
                    <div className='people'>
                        <img src={doc.gender === "male" ? image : image1} alt='' />
                    </div>
                    <div className='name'>
                        <h3>{doc.name}</h3>
                        <p>{ posts[doc.job] }</p>
                    </div>
                    <div className='name'>
                        <h5>{t('doctor.experience')}</h5>
                        <h6>{doc.skill} {t('doctor.year')}</h6>
                    </div>
                </div>
                <div className='rate'>
                    <h3>{t('doctor.rate')}</h3>
                    <div className='star'>
                        <Rating  
                        initialRating={doc.rating}
                        readonly
                        emptySymbol={<img src={EmptyStar} className="icon1" alt=''/>}
                        fullSymbol={<img src={Star} className="icon" alt=''/>}
                        />
                        <p>{doc.rating}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={sendMessage}>
                <Rate smile={smile} setSmile={setSmile} setNum={setNum} num={num}/>
                <div className='smile'>
                    <div value={card} onClick={() => setCard(!card)} className={card ? 'card active' : 'card'} onChange={(e) => setCard(e.target.value)}>
                        <img src={smile ? Smile : Smile1} alt='' />
                        <h3>{smile ? t('doctor.doc1') : t('doctor.doc')}</h3>
                    </div>
                    <div value={card1} onClick={() => setCard1(!card1)} className={card1 ? 'card active' : 'card'} onChange={(e) => setCard1(e.target.value)}>
                        <img src={smile ? Cubic : Cubic1} alt='' />
                        <h3>{smile ? t('doctor.exp') : t('doctor.notexp')}</h3>
                    </div>
                    <div value={card2} onClick={() => setCard2(!card2)} className={card2 ? 'card active' : 'card'} onChange={(e) => setCard2(e.target.value)}>
                        <img src={smile ? Perfect : Perfect1} alt='' />
                        <h3>{smile ? t('doctor.staff1') : t('doctor.staff')}</h3>
                    </div>
                </div>
                <div className='form_card'>
                    <label>{t('doctor.comment')}</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <Cheskbox anonim={anonim} setAnonim={setAnonim} />
                    <h2 className='anonim'>{t('doctor.anonim')}</h2>
                    <h2 className='num'>{t('doctor.phone')}</h2>
                    {anonim ? 
                        null
                        :
                        <ReactInputMask placeholder='+998 XX XXX XX XX' required mask="+\9\9\8 (99) 999-99-99" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    }
                </div>
                <button className='button'><img src={send} alt='' />{t('doctor.send')}</button>
            </form>
            <ul className='socials'>
                <li className='social'><a href='https://www.facebook.com/PlanBaby_Clinic-100915072467517/'><FaFacebook className='social-item'/></a></li>
                <li className='social'><a href='https://www.instagram.com/planbaby_clinic/'><FaInstagram className='social-item'/></a></li>
                <li className='social'><a href='https://t.me/Planbaby_clinic'><FaTelegram className='social-item'/></a></li>
            </ul>
        </div>
    )
}
