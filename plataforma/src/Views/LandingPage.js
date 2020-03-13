import React from 'react'

// * Componentes
import { Box, Container } from '@material-ui/core'

// * CustomComp
import NavBar from 'Components/NavBar'
import BannerHeader from 'Components/BannerHeader'
import PropostaValor from 'Components/PropostaValor'
import About from 'Components/About'

function LandingPage() {
  return (
    <Container maxWidth='xl'>
      <NavBar />
      <BannerHeader />
      <Box marginBottom='3rem'>
        <PropostaValor />
      </Box>
      <Box paddingBottom='3rem'>
        <About />
      </Box>
    </Container>
  )
}

export default LandingPage
