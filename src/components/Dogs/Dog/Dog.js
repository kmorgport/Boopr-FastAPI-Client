import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase} from '@material-ui/core'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { boopDog, deleteDog } from '../../../actions/dogs';

const Dog = () => {
    const [ boops, setBoops ] = useState(dog?.boops);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const  openPost = () => {
        navigate(`/dogs/${dog.id}`)
    }

    return (
        <Card>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={dog.name} />
            </ButtonBase>
        </Card>
    )
}