import React from 'react';
import styles from './GameItemCard.module.css';
import {IPeople, IStarship} from "swapi-ts";
import ImageIcon from "@mui/icons-material/Image";
import CardContent from "@mui/material/CardContent";
import CardPerson from "../../common/CardPerson";
import CardStarship from "../../common/CardStarship";


interface gameItemI {
    people: IPeople[] | null,
    starships: IStarship[] | null
}
interface GameItemCardI {
    index: number;
    type: string | undefined;
    gameItems: gameItemI;
}

const GameItemCard =  (props:GameItemCardI ) => {
    const { index, type, gameItems } = props;
    if(type && type === 'people' && gameItems['people']){
        return (
            <CardPerson
                {...gameItems['people'][index]}
            />
        )
    } else if(type && type === 'starships' && gameItems['starships']){
        return (
            <CardStarship
                {...gameItems['starships'][index]}
            />
        )
    }

    return(
        <div className={styles.GameItemCard}>
            <CardContent>
                <ImageIcon color="primary"/>
            </CardContent>
        </div>
    )
};
export default GameItemCard;
