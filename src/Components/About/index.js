import React from 'react'

import Boneco from 'Assets/Images/Boneco.svg'
import 'Assets/Images/Boneco.css'
import PDV from 'Assets/Images/PDV.png'
import 'Assets/Images/PDV.css'

// * Componentes
import { Box, Grid, Paper, Button } from '@material-ui/core'

function NavBar() {
  return (
    <Grid item sm={12}>
      <Grid container justify='center'>
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
                  <img class='PDV' src={PDV} alt=' ' />
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
                  <img class='Boneco' src={Boneco} alt=' ' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default NavBar
