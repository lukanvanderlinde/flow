import React from 'react'

import 'Assets/Images/Sad.css'
import Sad from 'Assets/Images/Sad.svg'
import 'Assets/Images/Happy.css'
import Happy from 'Assets/Images/Happy.svg'

// * Componentes
import { Grid, Button, TextField, Typography } from '@material-ui/core'

function Results() {
  const [userPhone, setUserPhone] = React.useState(false)
  const [isSubimitted, setIsSubimitted] = React.useState(false)

  const Image = () => {
    if (isSubimitted) {
      return <img src={Happy} className='Happy' alt=' ' />
    } else {
      return <img src={Sad} className='Sad' alt=' ' />
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
                placeholder='Qual é o seu whats?'
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
                  setIsSubimitted(true)
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
