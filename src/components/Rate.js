import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function Rate({ setSmile, interactive, num, setNum}) {
    return (
        <Rater 
            total={5} 
            rating={num}
            interactive={interactive}
            onRate={({rating}) => {
                console.log(rating)
                setNum(rating);
                if (rating <= 3) { 
                    setSmile(false)
                }else {
                    setSmile(true)
                }
                num = rating
            }}
        />
    )
}


