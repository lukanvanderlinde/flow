import React from 'react'

// * Componentes
import { Grid, Button } from '@material-ui/core'

function NavBar() {
  return (
    <Grid item xs={12}>
      <Grid container justify='center' spacing={2}>
        <Grid item>
          <Button color='secondary' href='#search'>
            BUSCAR
          </Button>
        </Grid>
        {/* <Grid item>
          <Button color='secondary'>VIAGENS</Button>
        </Grid> */}
        <Grid item>
          <Button color='secondary' href='#about'>
            SOBRE
          </Button>
        </Grid>
        {/* <Grid item>
          <Button color='secondary'>ENTRAR</Button>
        </Grid> */}
        {/* <Grid item>
          <Button color='primary' variant='contained'>criar conta</Button>
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default NavBar
