import React from 'react'

// * Componentes
import { Box, Container, Typography } from '@material-ui/core'

// * CustomComp
import NavBar from 'Components/NavBar'
import Results from 'Components/Results'
import CardViagem from 'Components/CardViagem'

function ResultadosBusca({ ...props }) {
  const achou = true
  // try {
  //   FirebaseApp.database()
  //     .ref('search')
  //     .push(payload)
  // } catch (error) {
  //   alert(error)
  // }

  console.log(props.match.params.origem)
  console.log(props.match.params.destino)
  console.log(props.match.params.ida)

  const SearchResult = () => {
    if (achou) {
      return (
        <Typography variant='h2'>
          Viagens disponíveis
          <span role='img' aria-label=' '>
            {' '}
            🚌
          </span>
          {/* {props.match.params.origem}
        {props.match.params.destino} */}
        </Typography>
      )
    } else {
      return <Results />
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
