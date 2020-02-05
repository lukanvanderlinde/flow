import React from 'react'

// * Componentes
import { Grid, Typography } from '@material-ui/core'

function NavBar() {
  return (
    <Grid item xs={12}>
      <Grid container justify='center'>
        <Typography variant='h4'> About</Typography>
      </Grid>
    </Grid>
  )
}

export default NavBar
