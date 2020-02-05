import React from 'react'

// * Componentes
import {
  Box,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'

import Results from './Results'

function Search() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [startDate, setStartDate] = React.useState(null)
  const [returnDate, setReturnDate] = React.useState(null)
  const [originPlace, setOriginPlace] = React.useState(null)
  const [destinationPlace, setDestinationPlace] = React.useState(null)
  const [isSearched, setIsSearched] = React.useState(false)

  const handleStartDate = (date) => {
    setStartDate(date)
  }
  const handleReturnDate = (date) => {
    setReturnDate(date)
  }
  const handleOriginPlace = (place) => {
    setOriginPlace(place)
  }
  const handleDestinationPlace = (place) => {
    setDestinationPlace(place)
  }
  const handleSearch = (event) => {
    console.log(
      `Origem: ${originPlace} \n Destino: ${destinationPlace} \n Ida: ${startDate} \n Volta: ${returnDate}`
    )
  }

  const Result = () => {
    if (isSearched) {
      return <Results />
    } else {
      return <React.Fragment />
    }
  }

  const Load = () => {
    if (isLoading) {
      return <CircularProgress />
    } else {
      return <React.Fragment />
    }
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
                  onChange={(event) => {
                    handleOriginPlace(event.target.value)
                  }}
                />
              </Grid>
              <Grid item>
                <DatePicker
                  format='DD/MM/YYYY'
                  label='Ida'
                  inputVariant='outlined'
                  value={startDate}
                  onChange={handleStartDate}
                  animateYearScrolling
                  minDate={new Date()}
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
                  onChange={(event) => {
                    handleDestinationPlace(event.target.value)
                  }}
                />
              </Grid>
              <Grid item>
                <DatePicker
                  format='DD/MM/YYYY'
                  label='Volta (opcional)'
                  inputVariant='outlined'
                  value={returnDate}
                  onChange={handleReturnDate}
                  animateYearScrolling
                  minDate={startDate}
                  minDateMessage={
                    'Data de volta não pode ser antes do que a de ida :)'
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Buttom */}
      <Grid item xs={12}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={(event) => {
              setIsLoading(true)
              setTimeout(function() {
                setIsLoading(false)
                handleSearch(event)
                setIsSearched(true)
              }, 3000)
            }}>
            Buscar minha viagem
          </Button>
        </Grid>
      </Grid>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Box margin='4rem'>
          <Load />
          <Result />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Search
