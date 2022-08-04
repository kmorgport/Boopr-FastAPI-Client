import React from 'react';
import useStyles from './styles';
import { CircularProgress, Grid } from "@material-ui/core";
import BoopDog from './Dog/BoopDog'

const Dogs = () => {
    const { dogs, isLoading } = useSelector( state => state.dogs)

    return (
        <Grid>
            {
                dogs.map((dog)=> (
                    <Grid key={dog._id}>

                    </Grid>
                ))
            }
        </Grid>
    )
}