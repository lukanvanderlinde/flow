import React from 'react'

import Boneco from 'Assets/Images/Boneco.svg'
import PDV from 'Assets/Images/PDV.png'

// * Componentes
import { Box, Grid, Paper, Button, Container } from '@material-ui/core'

import ImageHolder from 'Components/ImageHolder'

function PropostaValor() {
  return (
    <Container maxWidth='md'>
      <Paper>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={2}>
              <Grid item>
                <ImageHolder image={PDV} alt=' ' />
              </Grid>
              <Grid item>
                <Box marginBottom='2rem'>
                  <Button variant='contained' color='primary' href='#search'>
                    Ir para a busca
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <ImageHolder image={Boneco} alt=' ' />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PropostaValor
