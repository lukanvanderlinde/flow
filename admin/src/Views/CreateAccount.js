import React, { useCallback } from 'react'
import { withRouter } from 'react-router'

import FirebaseApp from '../Services/FirebaseApp'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  Button,
  TextField,
  Link,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const CreateAccount = ({ history }) => {
  const classes = useStyles()

  const handleDataBase = useCallback(
    async (userCredencials, userData) => {
      try {
        FirebaseApp.database()
          .ref(`users/${userCredencials.user.uid}`)
          .set(userData)
      } catch (error) {
        alert(error)
      } finally {
        history.push('/home')
      }
    },
    [history]
  )

  const handleCreateAccount = async (event) => {
    event.preventDefault()

    const { email, password, name, surname } = event.target.elements

    try {
      await FirebaseApp.auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
          handleDataBase(userCredentials, {
            information: {
              name: name.value,
              surname: surname.value,
              email: email.value
            }
          })
        })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Create Account
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleCreateAccount}
          noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='name'
                label='Name'
                type='name'
                id='name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='surname'
                label='Surname'
                type='surname'
                id='surname'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Create now
          </Button>
          <Grid container justify='center'>
            <Grid item>
              <Link href='/create-account' variant='body2'>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default withRouter(CreateAccount)
