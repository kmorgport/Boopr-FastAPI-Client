import Dog from './Dog/Dog.js';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

const Dogs = () => {
    const { dogs, isLoading } = useSelector(state => state.dogs)
    const classes = useStyles();

    return(
        <Grid>
            {
                dogs.map((dog)=> (
                    <Grid key={dog.id}>
                        <Dog dog={dog}/>
                    </Grid>
                ))
            }
        </Grid>
    )

}