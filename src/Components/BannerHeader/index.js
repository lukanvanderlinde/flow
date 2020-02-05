import React from 'react'

// * Componentes
import { Container, Grid } from '@material-ui/core'

// * CustomComp
import LogoHeader from './LogoHeader'
import SearchBar from './SearchBar'

function BannerHeader() {
  return (
    <Grid item xs={12}>
      <Container>
        <Grid container justify='center' alignItems='center' spacing={4}>
          <Grid item xs={12}>
            <LogoHeader />
          </Grid>

          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default BannerHeader
