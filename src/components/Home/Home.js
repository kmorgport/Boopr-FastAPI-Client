import React from 'react';
import useStyles from './styles';
import Dogs from '../Dogs/Dogs';
import Form from '../Form/Form';

const Home = () => {

    return (
        <Grow>
            <Container>
                <Grid>
                    <Grid>
                        <Dogs/>
                    </Grid>
                    <Grid>
                        <AppBar>
                            <Textfield/>
                            <ChipInput/>
                            <Button/>
                        </AppBar>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home