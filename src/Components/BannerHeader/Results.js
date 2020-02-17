import React from 'react'

import FirebaseApp from 'Services/FirebaseApp'

import SadPerson from 'Assets/Components/SadPerson'

import 'Assets/Images/Happy.css'
import Happy from 'Assets/Images/Happy.svg'

// * Componentes
import { Grid, Button, TextField, Typography } from '@material-ui/core'

function Results() {
  const [userPhone, setUserPhone] = React.useState(false)
  const [isSubimitted, setIsSubimitted] = React.useState(false)

  const handleAvisa = () => {
    setIsSubimitted(true)
    try {
      FirebaseApp.database()
        .ref('users/' + userPhone)
        .set({
          phone: userPhone.toString()
        })
    } catch (error) {
      alert(error)
    }
  }

  const Image = () => {
    if (isSubimitted) {
      return <img src={Happy} className='Happy' alt=' ' />
    } else {
      return <SadPerson />
    }
  }

  const Title = () => {
    if (isSubimitted) {
      return <Typography variant='h3'>Feito!</Typography>
    } else {
      return (
        <Typography variant='h3'>
          Poxa, não encontramos nenhuma viagem...
        </Typography>
      )
    }
  }

  const PhoneInput = () => {
    if (isSubimitted) {
      return <React.Fragment />
    } else {
      return <Grid container spacing={2}></Grid>
    }
  }

  const Subtitle = () => {
    if (isSubimitted) {
      return <Typography>Vamos te avisar assim que juntar um grupo!</Typography>
    } else {
      return (
        <Typography variant='body1'>
          Mas se quiser, podemos criar um grupo de viagem e caso tenha mais
          algumas pessoas interessadas, a gente faz um ônibus só para vocês!
        </Typography>
      )
    }
  }

  return (
    <Grid item xs={12}>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='flex-end'>
            <Image />
          </Grid>
        </Grid>
        <Grid item sm={4}>
          <Grid container spacing={4}>
            <Grid item>
              <Title />
              <Subtitle />
            </Grid>

            <Grid item sm={12}>
              <TextField
                label='Telefone'
                placeholder='(DDD) 9 0000-0000'
                type='search'
                variant='outlined'
                fullWidth
                onChange={(event) => {
                  setUserPhone(event.target.value)
                }}
              />
            </Grid>

            <Grid item>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  handleAvisa()
                }}>
                ME AVISA!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Results
