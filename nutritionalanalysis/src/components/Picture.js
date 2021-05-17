import React from 'react';
import './Picture.css';
import Data from './Data';
import Info from './Info';

export default function Picture({list,data}){
    return(
        <div className="pic">
            {
                list?<div className="listdisplay" >
                        <Data data={data}/>
                    </div>
                :<Info/>
            }
        </div>
    );
}