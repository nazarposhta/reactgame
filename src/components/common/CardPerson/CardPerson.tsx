import React from 'react';
import styles from './CardPerson.module.css';
import { IPeople } from 'swapi-ts';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardPerson = ({ name, mass, birth_year }: IPeople) => (
    <div className={styles.CardPerson}>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Person
                </Typography>
                <Typography variant="h5" component="div">
                    <b>Mass: </b>{mass}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <b>Name: </b>{name}
                </Typography>
                <Typography variant="body2">
                    <b>Year: </b>{birth_year}
                </Typography>
            </CardContent>
        </Card>
    </div>
);
export default CardPerson;
