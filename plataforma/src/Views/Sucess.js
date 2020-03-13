import React from 'react'

import Lottie from 'react-lottie'

import LottieSucess from 'Assets/Animation/LottieSucess.json'

// * Componentes
import { Container, Paper, Box, Typography } from '@material-ui/core'

function Sucess() {
  const defaultOptions = {
    loop: 1,
    autoplay: true,
    animationData: LottieSucess
  }

  return (
    <Container maxWidth='md'>
      <Box textAlign='center' marginTop='2rem'>
        <Typography variant='h2'>
          Uhull! Tudo certo com a sua viagem!
        </Typography>
        <Typography variant='body1'>
          Agora enviaremos a sua confirmação no seu whatsapp e email.
        </Typography>
      </Box>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Box textAlign='center' marginTop='2rem'>
        <Typography variant='h3'>
          Ficou com dúvida?{' '}
          <a
            href='https://api.whatsapp.com/send?phone=5511995892132&text=Oii%20pessoal%20da%20Flow%2C%20tudo%20bem%3F'
            target='blank'>
            Fale com a gente
          </a>
        </Typography>
      </Box>
      <Box marginTop='1rem' paddingBottom='10rem'>
        <Paper>
          <Box padding='1rem' paddingBottom='1rem' marginBottom='1rem'>
            <Typography variant='body1'>
              - Fique tranquilo, nós fazemos uma pré reserva no seu cartão e a
              cobrança vem depois.
            </Typography>
            <Typography variant='body1'>
              - Você só precisa da confirmação do seu whatsapp e um documento
              com foto.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}

export default Sucess
