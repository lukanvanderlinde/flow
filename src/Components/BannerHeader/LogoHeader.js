import React from 'react'
import LogoFlow from 'Assets/Components/LogoFlow'

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
        <LogoFlow />
      </Box>

      <Box paddingBottom='20px'>
        <Typography variant='h3' align='center'>
          Já imaginou uma viagem até 30% mais rápida?
        </Typography>
      </Box>
    </Grid>
  )
}

export default Header
