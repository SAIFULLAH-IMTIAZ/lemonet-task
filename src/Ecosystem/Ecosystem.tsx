import s from './Ecosystem.module.css'
import ESCard from "../Card/ESCard";
import React from 'react';
import ESSteps from "../Step/ESSteps";

const ESValue = [
    {
        title: "Tokens Offered",
        content:"20 Million"
    },
    {
        title: "Soft Cap (Public ICO)",
        content:"4 Million"
    },
    {
        title: "Hard Cap",
        content:"16 Million"
    },
    {
        title: "Tokens Distributed",
        content:"30 days after token sale ends\n"
    }
];


export default function Ecosystem ()  {
    return(
        <div className={s.ecosystem}>
            <div className={s.heading}>LEMON Ecosystem</div>
            <div className={s.card}>
                {
                    ESValue.map((e)=>{
                        return(
                            <ESCard dis={e.content} title={e.title} />
                        )
                    })
                }
            </div>
                <ESSteps />
        </div>
    )
}
