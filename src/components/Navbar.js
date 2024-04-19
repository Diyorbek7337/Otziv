import React from 'react';
import Logo from '../image/logopro.png';
import LogoWhite from "../image/logoWrite.png"
import UZ from '../image/UZ.png';
import RU from '../image/ru.png'
import EN from '../image/us.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jsCookie from 'js-cookie';
import { useTranslation } from 'react-i18next';


export default function Navbar({changeLan}) {
    const lang = jsCookie.get("i18next")
    const [ imgSrc, setImgSrc ] = useState()
    const { t } = useTranslation()
    useEffect(() => {
        if( lang === "Uz" ) {
            setImgSrc(UZ)
        } else if( lang === "Ru" ) {
            setImgSrc(RU)
        } else {
            setImgSrc(EN)
        }
    }, [lang])
    const [click, setClick] = useState(false)
    return (
        <div className='navbar container'>
            <Link to='' className='logoBox'>
                <div className='logoItem'><img src={Logo} alt='' className='logo'/></div>
                <div className='logoItemWrite'><img src={LogoWhite} alt='' className='logo2'/></div>
            </Link>
            <div className='language' onClick={()=> setClick(!click)}>
            <div className='lang'>
                        <img src={imgSrc} alt='' />
                        <h5>{t('lang')}</h5>
                    </div>
                <div className={click ? 'langGroup active' : 'langGroup'}>
                    <div className='lang' onClick={() => (changeLan('Uz'))}>
                        <img src={UZ} alt='' />
                        <h5>UZ</h5>
                    </div>
                    <div className='lang' onClick={() => (changeLan('Ru'))}>
                        <img src={RU} alt='' />
                        <h5>RU</h5>
                    </div>
                    <div className='lang' onClick={() => (changeLan('En'))}>
                        <img src={EN} alt='' />
                        <h5>EN</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}
