import React from 'react'

// * Componentes
import { Grid, TextField, Button } from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'

function Search() {
  const [startDate, setStartDate] = React.useState(new Date())
  const [returnDate, setReturnDate] = React.useState(new Date())

  const handleStartDate = (date) => {
    setStartDate(date)
  }
  const handleReturnDate = (date) => {
    setReturnDate(date)
  }
  return (
    <Grid container spacing={4}>
      {/* INPUTS */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='flex-end'
              spacing={2}>
              <Grid item>
                <TextField
                  label='Origem'
                  placeholder='De onde vamos partir?'
                  type='search'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <DatePicker
                  label='Ida'
                  inputVariant='outlined'
                  value={startDate}
                  onChange={handleStartDate}
                  animateYearScrolling
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='flex-start'
              spacing={2}>
              <Grid item>
                <TextField
                  label='Destino'
                  placeholder='Para onde você vai?'
                  type='search'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <DatePicker
                  label='Volta (opcional)'
                  inputVariant='outlined'
                  value={returnDate}
                  onChange={handleReturnDate}
                  animateYearScrolling
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Buttom */}
      <Grid item xs={12}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Button variant='contained' color='primary'>
            Buscar minha viagem
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Search
