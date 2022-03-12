import React, {FC} from 'react';
import  s from './ESCard.module.css'

interface ESProps {
    title?: string
    dis?: string
}

const ESCard : FC <ESProps> = (props:ESProps) =>  {
    return (
        <div className={s.card}>
            <div className={s.content}>
                <p className={s.title} >
                    {props.title}
                </p>
                <p className={s.dis} >
                    {props.dis}
                </p>
            </div>
        </div>
    );
}


export default ESCard;
