import React from 'react'

// * Componentes
import { Grid } from '@material-ui/core'

// * CustomComp
import NavBar from 'Components/NavBar'
import BannerHeader from 'Components/BannerHeader'
import About from 'Components/About'

function LandingPage() {
  return (
    <Grid container spacing={4}>
      <NavBar />

      <BannerHeader />

      <About />
    </Grid>
  )
}

export default LandingPage
