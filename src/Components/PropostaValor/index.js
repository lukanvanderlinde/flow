import React from 'react'

import Boneco from 'Assets/Images/Boneco.svg'
import 'Assets/Images/Boneco.css'
import PDV from 'Assets/Images/PDV.png'
import 'Assets/Images/PDV.css'

// * Componentes
import { Box, Grid, Paper, Button, Container } from '@material-ui/core'

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
                <img className='PDV' src={PDV} alt=' ' />
              </Grid>
              <Grid item>
                <Box marginBottom='2rem'>
                  <Button variant='contained' color='primary' href='#search'>
                    Buscar minha viagem
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}>
            <Grid container direction='column' justify='center' spacing={2}>
              <Grid item>
                <img className='Boneco' src={Boneco} alt=' ' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default PropostaValor
