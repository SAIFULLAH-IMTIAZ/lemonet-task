import * as React from 'react';
import Box from '@material-ui/core/Box'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'
import SToken from "../TokenSale/SToken";
import Grid from "@material-ui/core/Grid";

const token= [
    {
        token: "Token sale I",
        tDis: "Sep 15 - Oct 14",
        bonus: "50% Bonus",
        bDis: "$0.354/token"
    },
    {
        token: "Token sale II",
        tDis: "Oct 15 - Nov 14",
        bonus: "40% Bonus",
        bDis: "$0.490/token"
    },
    {
        token: "Token sale III",
        tDis: "Nov 15 - Dec 14",
        bonus: "20% Bonus",
        bDis: "$0.550/token"
    },
    {
        token: "Token sale IV",
        tDis: "Dec 15 - Jan 14",
        bonus: "10% Bonus",
        bDis: "$0.750/token"
    },
    {
        token: "Token sale V",
        tDis: "Jan 15 - Feb 14",
        bonus: "5% Bonus",
        bDis: "$0.950/token"
    },
];


export default function ESSteps() {
        return (
                <Box sx={{bgcolor: 'success.main'}}>
                    <Stepper  alternativeLabel>
                        {token.map((e) => (
                            <Step >
                                <StepLabel>
                                    <SToken tokenNo={e.token} tDis={e.bDis} bDis={e.bDis} bonusPer={e.bonus} />
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
        );
    }
