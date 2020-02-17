import React from 'react'

// * Componentes
import { Container, Grid, Button } from '@material-ui/core'

function NavBar() {
  return (
    <Container>
      <Grid container justify='center' spacing={2}>
        <Grid item>
          <Button color='secondary' href='#search'>
            BUSCAR
          </Button>
        </Grid>
        <Grid item>
          <Button color='secondary' href='#about'>
            SOBRE
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NavBar
