import React from 'react';
import Buttons from './Buttons';


export default function Input({onClick,list,onClear,onChange}){
    return(
        <div className="inputdiv">
            <form onSubmit={onClick}>
                <input className="inputbox text" onChange={onChange}  placeholder="eg: 1 cup rice, 10 oz chickpeas"></input>
            </form>
            <Buttons onClick={onClick} onClear={onClear} list={list} />
        </div>
    )
}
