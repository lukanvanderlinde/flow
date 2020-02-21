import React from 'react'

// * Componentes
import { Container, Grid } from '@material-ui/core'

// * CustomComp
import SearchBar from './SearchBar'
import Header from './Header'
import ListarViagens from './ListarViagens'

function BannerHeader() {
  return (
    <Container id='search'>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid item sm={12}>
          <Header />
        </Grid>

        <Grid item sm={12}>
          <SearchBar />
        </Grid>
        <Grid item sm={12}>
          <ListarViagens />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerHeader
