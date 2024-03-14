import React from 'react';
import '../styles/check.css';

export default function Cheskbox({ anonim, setAnonim }) {
    return (
        <>
            <input type="checkbox" id="switch" />
            <label 
                htmlFor="switch" 
                className='check' 
                style={anonim ? { float: "left", border: "2px solid #808CFF" } : { float: "left", border: "2px solid #ccc"  }} 
                onClick={() => setAnonim(!anonim)}
            >Toggle</label>
        </>
    )
}
