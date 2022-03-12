import React, {FC} from 'react';
import  s from './SToken.module.css'

interface ESProps {
    tokenNo?: string
    tDis?: string
    bonusPer?: string
    bDis?: string
}

const SToken : FC <ESProps> = (props:ESProps) =>  {
    return (
        <div className={s.card}>
            <div className={s.content}>
                <p className={s.title} >
                    {props.tokenNo}
                </p>
                <p className={s.dis} >
                    {props.tDis}
                </p>
                <p className={s.title} >
                    {props.bonusPer}
                </p>
                <p className={s.dis} >
                    {props.bDis}
                </p>
            </div>
        </div>
    );
}


export default SToken;