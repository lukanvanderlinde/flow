import React from 'react'

// * Componentes
import { Container, Grid } from '@material-ui/core'

// * CustomComp
import LogoHeader from './LogoHeader'
import SearchBar from './SearchBar'

function BannerHeader() {
  return (
    <Container id='search'>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid item sm={12}>
          <LogoHeader />
        </Grid>

        <Grid item sm={12}>
          <SearchBar />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerHeader
