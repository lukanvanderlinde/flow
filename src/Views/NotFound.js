import React from 'react'

import { Grid, Button, Box, Typography } from '@material-ui/core'

import Ops from 'Assets/Images/Ops.svg'
import Logo from 'Assets/Images/Logo.svg'
import ImageHolder from 'Components/ImageHolder'

function LandingPage() {
  return (
    <Box marginTop='1rem' padding='1rem'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}>
        <Grid item sm={4}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            spacing={2}>
            <Grid item>
              <ImageHolder image={Ops} alt=' ' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={4}>
          <Grid container direction='column' justify='center' spacing={2}>
            <Grid item>
              <ImageHolder image={Logo} alt='Vai no Flow' />
            </Grid>
            <Grid item>
              <Typography variant='h3'>
                Ops, essa rota ainda não está disponível...
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                Essa página não está disponível, mas não se preocupe que podemos
                ir para um lugar mais legal!
              </Typography>
            </Grid>
            <Grid item>
              <Box marginBottom='2rem' id='about'>
                <Button variant='contained' color='primary' href='#search'>
                  Buscar minha viagem
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LandingPage
