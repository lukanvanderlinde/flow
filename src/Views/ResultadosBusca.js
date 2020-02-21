import React, { useState, useEffect } from 'react'

// * Componentes
import { Box, Container, Typography, CircularProgress } from '@material-ui/core'

import FirebaseApp from 'Services/FirebaseApp'

// * CustomComp
import NavBar from 'Components/NavBar'
import Results from 'Components/Results'
import CardViagem from 'Components/CardViagem'

function ResultadosBusca({ ...props }) {
  const [isLoading, setIsLoading] = useState(true)

  const [origem] = useState(props.match.params.origem)

  const [viagensNoBanco, setViagensNoBanco] = useState([])
  const [matchViagens, setMatchViagens] = useState(false)
  const viagens = []

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
      return <CircularProgress />
    } else {
      if (matchViagens) {
        return (
          <Box>
            <Typography variant='h2'>
              Viagens disponíveis
              <span role='img' aria-label=' '>
                {' '}
                🚌
              </span>
            </Typography>
            {viagens}
          </Box>
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
