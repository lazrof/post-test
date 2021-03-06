import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import { useStyles } from '../../styles/SignInStyle';
import Alert from '@material-ui/lab/Alert';

const SignIn = (props) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar sesión
                </Typography>
                <form className={classes.form} onSubmit={props.handleSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Correo"
                                name="email"
                                autoComplete="email"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={props.handleChangeForm}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Ingresar
                    </Button>

                    {props.alertStatus ? (
                        <Alert severity="error">
                            {props.message}
                        </Alert>) : null}
                    <br />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/sign-up" variant="body2">
                                ¿Aún no te has registrado?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container >
    );
}

export default SignIn;