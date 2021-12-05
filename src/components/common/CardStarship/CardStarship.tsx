import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IStarship } from 'swapi-ts';

import styles from './CardStarship.module.css';

const CardStarship = ({ crew, name, manufacturer }: IStarship) => (
    <div className={styles.CardStarship}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Starship
                </Typography>
                <Typography variant="h5" component="div">
                    <b>Crew: </b>{crew}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <b>Name: </b>{name}
                </Typography>
                <Typography variant="body2">
                    <b>manufacturer: </b>{manufacturer}
                </Typography>
            </CardContent>
        </Card>
    </div>
);
export default CardStarship;
