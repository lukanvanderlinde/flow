import React from 'react'

// * Componentes
import { Box, Typography, Grid } from '@material-ui/core'

import Logo from 'Assets/Images/Logo.svg'
import ImageHolder from 'Components/ImageHolder'

function Header() {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      spacing={2}>
      <Box paddingTop='40px'>
        <ImageHolder image={Logo} alt='Vai no Flow' />
      </Box>

      <Box paddingBottom='20px'>
        <Typography variant='h3' align='center'>
          Já imaginou uma viagem de ônibus até 30% mais rápida?
          <span role='img' aria-label=' '>
            {' '}
            🚌
          </span>
        </Typography>
      </Box>
    </Grid>
  )
}

export default Header
