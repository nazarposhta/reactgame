import React, {useEffect, useState} from 'react';
import styles from './Game.module.css';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ResourceForm from './ResourceForm';
import { IPeople, IStarship} from "swapi-ts";
import {useParams} from "react-router-dom";
import fetchGameData from "../../api/fetchGameData";
import GameItemCard from "./GameItemCard/GameItemCard";
import Typography from '@mui/material/Typography';
import ScoreCounter from './ScoreCounter';

interface gameItemI {
    people: IPeople[] | null;
    starships: IStarship[] | null;
}
const initialGameItems = { people: null, starships: null };
const Game = () => {
    const [ isLoadReq, setLoadReq ] = useState<boolean>(false);
    const [ gameIteration, setGameIteration ] = useState<number>(0);
    const [ gameItems, setGameItems ] = useState<gameItemI>(initialGameItems);
    const { type } = useParams();

    useEffect(() => {
        setGameIteration(0);
        setGameItems(initialGameItems);
    }, [type])

    useEffect(() => {
        if(gameIteration === 0){
            return;
        }
        fetchGameData(type).then((gameData) => {
            setGameItems(gameData);
            setLoadReq(false);
        })
    }, [gameIteration]);

    const handlePlay = () => {
        setGameIteration(gameIteration + 1);
        setLoadReq(true);
    }
    return (
        <div className={styles.Game}>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom component="div">
                        <ScoreCounter
                            type={type}
                            gameItems={gameItems}
                            gameIteration={gameIteration}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <GameItemCard
                            index={0}
                            type={type}
                            gameItems={gameItems}
                        />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <ResourceForm
                        playGame={handlePlay}
                        isLoading={isLoadReq}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <GameItemCard
                            index={1}
                            type={type}
                            gameItems={gameItems}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};
export default Game;
