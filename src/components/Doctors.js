import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Cheskbox from './Cheskbox';
import ReactInputMask from 'react-input-mask';
import send from '../image/send.png';
import Smile from '../image/lovepik-male-teacher-holding-a-book-png-image_401976432_wh1200-removebg-preview.png';
import Cubic from '../image/cub.png';
import Perfect from '../image/alobilim.png';
import Smile1 from '../image/angry.png'; 
import Cubic1 from '../image/cub1.png';
import Perfect1 from '../image/perfect1.png';
import Rate from './Rate';
import Star from '../image/star.png.png'
import EmptyStar from '../image/emptystar.png'
import Rating from 'react-rating'
import { FaInstagram } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";

import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export default function Doctors({ value }) {
    const { t } = useTranslation()
    // const posts = {
    //     "62dbb9ce7f0052a731f9d291": t('doctor.jobNevrapatolog'),
    //     "62de5439e419cc5fafaebd7a": t('doctor.jobUzi'),
    //     "62de5478e419cc5fafaebd7e": t('doctor.jobMassaj'),
    //     "62de549ee419cc5fafaebd80": t('doctor.jobPediatr'),
    //     "62de550bc61ee18b979a24a1": t('doctor.joblabarant'),
    //     "62de53efe419cc5fafaebd78": t('doctor.jobginekolog'),
    //     "62de53c5e419cc5fafaebd76": t('doctor.joburolog'),
    // }    

    const [ doc, setDoc ] = useState({
        name: "",
        job: "",
        rating: 0,
        skill: 0,
        image: ""
    })

    const { id } = useParams()
    const [smile, setSmile] = useState(false)
    const [anonim, setAnonim] = useState(false) 
    const [text, setText] = useState('')
    const [phone, setPhone] = useState('')
    const [num, setNum] = useState(0)
    const [card, setCard] = useState(false)
    const [card1, setCard1] = useState(false)
    const [card2, setCard2] = useState(false)




    
      const serverHost = 'https://shy-plum-alligator-yoke.cyclic.app/teacher';
    const sendMessage = async (e) => {
        e.preventDefault();
        let token = "7141886866:AAGw5nFcmlSXRY193t4xnLK75A3s3GqyuiQ"
        let chatID = "-4170977532";
        let message = `<b>📬 ProTech_Otziv</b>%0A<b>👤 Ismi: </b><i>${doc.name} ${doc.name2}</i>%0A<b>👤 Bahosi: </b><i>${num}</i>%0A<b>👤 Izoh: </b><i>${text}</i>%0A<b>👤 O'qituvchi muomilasi: </b><i>${card ? (smile ? t('doctor.doc1'): t('doctor.doc')) : '-'}</i>%0A<b>👤 O'qituvchi malakasi: </b><i>${card1 ? (smile ? t('doctor.exp'): t('doctor.notexp')) : '-'}</i>%0A<b>👤 Dars sifati: </b><i>${card2 ? (smile ? t('doctor.staff1'): t('doctor.staff')) : '-'}</i>${!anonim ? `%0A<b>📞 Tel raqami: </b><i>${phone}</i>` : ''}%0A<b> Anonimligi: </b><i>${anonim}</i>`;
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;
        let apibot = new XMLHttpRequest();
        apibot.open("GET", url, true);
        sendRating(value, num);
        setNum(0)

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
        console.log("ketdiii", num);
    }

    const getData = () => {
        axios
            .get(`${serverHost}/${value}`)
            .then(({data}) => {
                setDoc({ 
                    name: data.firstName,
                    name2: data.lastName,
                    skill: data.skill,
                    job: data.job,
                    rating: data.rating,
                    image: data.image
                 })
            })
    }

    const sendRating = (id, stars) => {
        axios
            .put(`${serverHost}/rating`, {
                id: id,
                stars
            })
            .then((data) => {
                console.log(data);
                getData()
            })
    }

    useEffect(() => {
        getData()
        console.log(id);
    }, [])
    
    
    return (
        <div className='doctor container'>
            <h4>{t('doctor.service')}</h4>
            <div className='doc_card'>
                <div className='person'>
                    <div className='people'>
                        <img src={doc.image} alt='' />
                    </div>
                    <div className='name'>
                        <h3>{doc.name} {doc.name2}</h3>
                        <p>{doc.job}</p>
                    </div>
                    <div className='name'>
                        <h5>{t('doctor.experience')}</h5>
                        <h6>{doc.skill}</h6>
                    </div>
                </div>
                <div className='rate'>
                    <h3>{t('doctor.rate')}</h3>
                    <div className='star'>
                        <Rating  
                        initialRating={(doc.rating.stars / doc.rating.num).toFixed(1)}
                        readonly
                        emptySymbol={<img src={EmptyStar} className="icon" alt=''/>                    }
                        fullSymbol={<img src={Star} className="icon" alt=''/>}
                        />
                        <p>{(doc.rating.stars / doc.rating.num).toFixed(1)}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={sendMessage}>
                <Rate smile={smile} setSmile={setSmile} setNum={setNum} num={num}/>
                <div className='smile'>
                    <div value={card} onClick={() => setCard(!card)} className={card ? 'card active' : 'card'} onChange={(e) => setCard(e.target.value)}>
                        <div className='iconImg'>
                            <img src={smile ? Smile : Smile1} alt='' />
                        </div>
                        <h3>{smile ? t('doctor.doc1') : t('doctor.doc')}</h3>
                    </div>
                    <div value={card1} onClick={() => setCard1(!card1)} className={card1 ? 'card active' : 'card'} onChange={(e) => setCard1(e.target.value)}>
                        <div className='iconImg'>
                        <img src={smile ? Cubic : Cubic1} alt='' />
                        </div>
                        <h3>{smile ? t('doctor.exp') : t('doctor.notexp')}</h3>
                    </div>
                    <div value={card2} onClick={() => setCard2(!card2)} className={card2 ? 'card active' : 'card'} onChange={(e) => setCard2(e.target.value)}>
                        <div className='iconImg'>
                            <img src={smile ? Perfect : Perfect1} alt='' />
                        </div>
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
                <li className='social'><a href='#'><FaFacebook className='fb'/></a></li>
                <li className='social'><a href='https://www.instagram.com/protechaacademy'><FaInstagram className='insta'/></a></li>
                <li className='social'><a href='https://t.me/ShurchiITCenter'><FaTelegram className='tg'/></a></li>
            </ul>
        </div>
    )
}
