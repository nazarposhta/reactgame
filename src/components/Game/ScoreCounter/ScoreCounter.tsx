import React, {useEffect, useState} from 'react';
import {IPeople, IStarship} from "swapi-ts";

interface gameItemI {
    people: IPeople[] | null,
    starships: IStarship[] | null
}
interface GameItemCardI {
    gameItems: gameItemI;
    type: string | undefined;
    gameIteration: number;
}

const ScoreCounter = ({ type, gameItems }:GameItemCardI) => {
    const [ leftWins, setLeftWins ] = useState<number>(0);
    const [ rightWins, setRightWins ] = useState<number>(0);

    useEffect(() => {
        return () => {
            setLeftWins(0);
            setRightWins(0);
        }
    }, [type])

    useEffect(() => {
        let left:number = 0;
        let right:number = 0;
        if(type === 'people' && gameItems['people']){
            left = parseInt(gameItems['people'][0].mass || '', 10) || 0;
            right = parseInt(gameItems['people'][1].mass || '', 10) || 0;
        }
        if(type === 'starships' && gameItems['starships']){
            left = parseInt(gameItems['starships'][0].crew || '', 10) || 0;
            right = parseInt(gameItems['starships'][1].crew || '', 10) || 0;
        }
        if(left > right){
            setLeftWins(leftWins + 1);
        }
        if(right > left){
            setRightWins(rightWins + 1);
        }
    }, [gameItems]);
    return(
        <>
            {leftWins} - {rightWins}
        </>
    )
}
export default ScoreCounter;
