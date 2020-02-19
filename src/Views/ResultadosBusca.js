import React from 'react'

// * Componentes
import { Box, Container, Typography } from '@material-ui/core'

// * CustomComp
import NavBar from 'Components/NavBar'
import CardViagem from 'Components/CardViagem'

function ResultadosBusca({ ...props }) {
  return (
    <Container maxWidth='xl'>
      <NavBar />
      <Typography variant='h2'>
        Viagens disponíveis
        <span role='img' aria-label=' '>
          {' '}
          🚌
        </span>
        {/* {props.match.params.origem}
        {props.match.params.destino} */}
      </Typography>
    </Container>
  )
}

export default ResultadosBusca
