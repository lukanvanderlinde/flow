import React, { useEffect, useState } from 'react'

// * Componentes
import { Box, Typography, Container, Grid } from '@material-ui/core'

import FirebaseApp from 'Services/FirebaseApp'
import CardViagem from 'Components/CardViagem'

// * CustomComp
import SearchBar from './SearchBar'

import Logo from 'Assets/Images/Logo.svg'
import ImageHolder from 'Components/ImageHolder'

function BannerHeader() {
  const [listaProximasViagens, setListaProximasViagens] = useState(null)

  const viagens = []

  const ListaViagens = () => {
    if (listaProximasViagens) {
      return (
        <Box marginBottom='3rem'>
          <Box marginBottom='1rem'>
            <Typography variant='h3'>Próximas Viagens</Typography>
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
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            spacing={2}>
            <Box paddingTop='40px'>
              <ImageHolder image={Logo} alt='Vai no Flow' />
            </Box>

            <Box paddingBottom='20px'>
              <Typography variant='h3' align='center'>
                Já imaginou uma viagem até 30% mais rápida?
              </Typography>
            </Box>
          </Grid>
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
