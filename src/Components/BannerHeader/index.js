import React from 'react'

// * Componentes
import { Box, Typography, Container, Grid } from '@material-ui/core'

// * CustomComp
import SearchBar from './SearchBar'

import Logo from 'Assets/Images/Logo.svg'
import ImageHolder from 'Components/ImageHolder'

function BannerHeader() {
  return (
    <Container id='search'>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid item sm={12}>
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
                Já imaginou uma viagem até 30% mais rápida?
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item sm={12}>
          <SearchBar />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerHeader
