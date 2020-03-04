import React, { useState } from 'react'

import FirebaseApp from 'Services/FirebaseApp'

// * Componentes
import { Redirect } from 'react-router-dom'
import { Grid, Box, TextField, Button } from '@material-ui/core'

import { DatePicker } from '@material-ui/pickers'
import Autocomplete from '@material-ui/lab/Autocomplete'

import Cidades from './Cidades'

function Search() {
  const [isSearched, setIsSearched] = React.useState(false)

  const [startDate, setStartDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [origem, setOrigem] = useState(null)
  const [destino, setDestino] = useState(null)

  const SearchResult = () => {
    if (isSearched) {
      return <Redirect push to={`/resultados/${origem}/${destino}}`} />
    } else {
      return <React.Fragment />
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { origem, destino, ida, volta } = event.target.elements

    const buscado = new Date().toString()

    const payload = {
      buscado,
      origem: origem.value,
      destino: destino.value,
      ida: ida.value,
      volta: volta.value
    }

    setOrigem(payload.origem)
    setDestino(payload.destino)

    try {
      FirebaseApp.database()
        .ref('search')
        .push(payload)
    } catch (error) {
      alert(error)
    }

    setIsSearched(true)
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
            format='DD/MM/YYYY'
            label='Ida'
            name='ida'
            id='ida'
            inputVariant='outlined'
            value={startDate}
            onChange={(date) => setStartDate(date)}
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
            onChange={(date) => setReturnDate(date)}
            animateYearScrolling
            minDate={startDate ? startDate : new Date()}
            minDateMessage={
              'Data de volta não pode ser antes do que a de ida :)'
            }
          />
        </Grid>
      </Grid>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item xs={12}>
          <Box paddingTop='2rem'>
            <Button variant='contained' color='primary' type='submit'>
              Buscar minha viagem
            </Button>
          </Box>
        </Grid>
      </Grid>
      <SearchResult />
    </form>
  )
}

export default Search
