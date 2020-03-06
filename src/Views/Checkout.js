import React from 'react'

import Lottie from 'react-lottie'

import LottieSucess from 'Assets/Animation/LottieSucess.json'

// * Componentes
import { Container, Box, Typography } from '@material-ui/core'

function Sucess() {
  const defaultOptions = {
    loop: 1,
    autoplay: true,
    animationData: LottieSucess
  }

  return (
    <Container maxWidth='md'>
      <Box textAlign='center' marginTop='2rem'>
        <Typography variant='h2'>Hummm... Que delicia!</Typography>
        <Typography variant='body1'>
          Agora é só se servir na estação e aproveitar o seu lanchinho.
        </Typography>
      </Box>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Container>
  )
}

export default Sucess
