import React, { useState, useEffect } from 'react'

// * Componentes
import {
  Box,
  Grid,
  Container,
  Typography,
  CircularProgress
} from '@material-ui/core'

import FirebaseApp from 'Services/FirebaseApp'

// * CustomComp
import NavBar from 'Components/NavBar'
import Results from 'Components/Results'
import CardViagem from 'Components/CardViagem'

import Happy from 'Assets/Images/Happy.svg'
import ImageHolder from 'Components/ImageHolder'

function ResultadosBusca({ ...props }) {
  const [isLoading, setIsLoading] = useState(true)

  const [origem] = useState(props.match.params.origem)

  const [viagensNoBanco, setViagensNoBanco] = useState([])
  const [matchViagens, setMatchViagens] = useState(false)

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('teste')
        .once('value')
        .then((snapshot) => {
          setViagensNoBanco(snapshot.val())
        })
    } catch (error) {
      alert(error)
    }
  }, [])

  const viagens = []
  const SearchResult = () => {
    viagensNoBanco.forEach((viagem) => {
      if (viagem.origem === origem) {
        setMatchViagens(true)
        viagens.push(
          <CardViagem
            data={viagem.data}
            origem={viagem.origem}
            destino={viagem.destino}
            preco={viagem.preco}
            tempo={viagem.tempo}
          />
        )
      }
      setIsLoading(false)
    })

    if (isLoading) {
      return (
        <Grid container direction='column' justify='center' alignItems='center'>
          <Box marginTop='3rem'>
            <CircularProgress />
          </Box>
        </Grid>
      )
    } else {
      if (matchViagens) {
        return (
          <Container maxWidth='md'>
            <Box marginTop='1rem'>
              <Typography variant='h2'>
                Viagens disponíveis
                <span role='img' aria-label=' '>
                  {' '}
                  🚌
                </span>
              </Typography>
            </Box>
            <Box marginTop='1rem'>{viagens}</Box>
            <Box marginTop='2rem'>
              <ImageHolder image={Happy} alt=' ' />
            </Box>
          </Container>
        )
      } else {
        return <Results />
      }
    }
  }

  return (
    <Container maxWidth='xl'>
      <NavBar />
      <SearchResult />
    </Container>
  )
}

export default ResultadosBusca
