import React from 'react'

import FirebaseApp from 'Services/FirebaseApp'

// * Componentes
import {
  Box,
  Grid,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core'
import { DatePicker } from '@material-ui/pickers'
import Autocomplete from '@material-ui/lab/Autocomplete'

import Results from './Results'
import Cidades from './Cidades'

function Search() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSearched, setIsSearched] = React.useState(false)

  const [startDate, setStartDate] = React.useState(null)
  const [returnDate, setReturnDate] = React.useState(null)

  const handleStartDate = (date) => {
    setStartDate(date)
  }
  const handleReturnDate = (date) => {
    setReturnDate(date)
  }

  const SearchResult = () => {
    if (isSearched) {
      return <Results />
    } else {
      return <React.Fragment />
    }
  }

  const LoadSpinner = () => {
    if (isLoading) {
      return <CircularProgress />
    } else {
      return <React.Fragment />
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { origem, destino, ida, volta } = event.target.elements

    const payload = {
      origem: origem.value,
      destino: destino.value,
      ide: ida.value,
      volta: volta.value
    }

    setIsLoading(true)
    setTimeout(function() {
      setIsLoading(false)

      try {
        FirebaseApp.database()
          .ref('search')
          .push(payload)
      } catch (error) {
        alert(error)
      }

      setIsSearched(true)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Autocomplete
            options={Cidades}
            getOptionLabel={(option) => option.Nome}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Origem'
                name='origem'
                id='origem'
                type='text'
                placeholder='De onde vamos partir?'
                variant='outlined'
                fullWidth
                required
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Autocomplete
            options={Cidades}
            getOptionLabel={(option) => option.Nome}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Destino'
                name='destino'
                id='destino'
                type='text'
                placeholder='Para onde você vai?'
                variant='outlined'
                fullWidth
                required
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            fullWidth
            // DATEPICKER SER NECESSÁRIO
            format='DD/MM/YYYY'
            label='Ida'
            name='ida'
            id='ida'
            inputVariant='outlined'
            value={startDate}
            onChange={handleStartDate}
            animateYearScrolling
            minDate={new Date()}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            fullWidth
            format='DD/MM/YYYY'
            label='Volta (opcional)'
            name='volta'
            id='volta'
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

      <Grid container spacing={4}>
        {/* INPUTS */}
        <Grid item xs={12}></Grid>

        {/* Buttom */}
        <Grid item xs={12}>
          <Grid container justify='center' alignItems='center' spacing={2}>
            <Button variant='contained' color='primary' type='submit'>
              Buscar minha viagem
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Box margin='4rem'>
            <LoadSpinner />
            <SearchResult />
          </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default Search
