import React, { useState, useEffect } from 'react';
import styles from './ResourceForm.module.css';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import { useParams, useNavigate } from "react-router-dom";

interface ResourseFormI {
    playGame: () => void,
    isLoading: boolean
}

const ResourceForm = (props: ResourseFormI) => {
    const { isLoading, playGame } = props;
    const [ resource, setResource ] = useState<string>('');
    const { type } = useParams<string>() || '';
    let navigate = useNavigate();

    useEffect(() => {
        if( type && (type !== 'starships' && type !== 'people') ){
            navigate('/page-not-found');
        }
        setResource(type || '');
    }, [type]);

    const handleChange = (event: SelectChangeEvent) => {
        navigate(`/game/${event.target.value}`, { replace: true });
    };

    return(
        <div className={styles.RecourseForm}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Resource</InputLabel>
                <Select
                    label="Resource"
                    value={resource}
                    onChange={handleChange}
                >
                    <MenuItem value={''}>-- Select</MenuItem>
                    <MenuItem value={'starships'}>Starships</MenuItem>
                    <MenuItem value={'people'}>People</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{marginTop: '100px'}}>
                <LoadingButton
                    onClick={playGame}
                    loading={isLoading}
                    loadingPosition="center"
                    variant="contained"
                    color="error"
                    disabled={!resource}
                >
                    Play
                </LoadingButton>
            </Box>
        </div>
    )
};
export default ResourceForm;
