import React from 'react'
import 'Assets/Images/Logo.css'
import LogoFlow from 'Assets/Images/LogoFlow.svg'

// * Componentes
import { Box, Grid, Typography } from '@material-ui/core'

function Header() {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}>
      <Box paddingTop='40px'>
        <img src={LogoFlow} className='App-logo' alt='Vai de Flow' />
      </Box>

      <Box paddingBottom='20px'>
        <Typography variant='h3'>
          Uma viagem inteligênte pode ser até 30% mais rápida!
        </Typography>
      </Box>
    </Grid>
  )
}

export default Header
