import React from 'react';

export default function Buttons({onClick,onClear,list}){
    return(
        <div className="button-wrap" >
            <button className="btn_anlys" onClick={onClick} >Analyse</button>
            {list? <button className="btn_clr" onClick={onClear}>Clear</button>:""}
        </div>
    )
}