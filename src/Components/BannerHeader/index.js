import React, { useEffect, useState } from 'react'

// * Componentes
import { Box, Typography, Container, Grid } from '@material-ui/core'

import FirebaseApp from 'Services/FirebaseApp'
import CardViagem from 'Components/CardViagem'

// * CustomComp
import SearchBar from './SearchBar'
import Header from './Header'

function BannerHeader() {
  const [listaProximasViagens, setListaProximasViagens] = useState(null)

  const viagens = []

  const ListaViagens = () => {
    if (listaProximasViagens) {
      return (
        <Box marginBottom='3rem'>
          <Box marginBottom='1rem'>
            <Typography variant='h3'>Próximas Viagens Disponíveis:</Typography>
          </Box>
          {viagens}
        </Box>
      )
    } else {
      return <React.Fragment />
    }
  }

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('viagens')
        .once('value')
        .then(function(snapshot) {
          setListaProximasViagens(snapshot.val())
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (listaProximasViagens) {
    listaProximasViagens.forEach((viagem) => {
      console.log(viagem)
      viagens.push(
        <Box marginBottom='1rem' marginTop='1rem'>
          <CardViagem
            data={viagem.data}
            origem={viagem.origem}
            destino={viagem.destino}
            preco={viagem.preco}
            tempo={viagem.preco}
          />
        </Box>
      )
    })
  }

  return (
    <Container id='search'>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid item sm={12}>
          <Header />
        </Grid>

        <Grid item sm={12}>
          <SearchBar />
        </Grid>
        <Grid item sm={12}>
          <ListaViagens />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerHeader
