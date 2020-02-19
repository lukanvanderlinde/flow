import React, { useState } from 'react'

import Lottie from 'react-lottie'

import LottieSucess from 'Assets/Animation/LottieSucess.json'

// * Componentes
import { Container } from '@material-ui/core'

function Sucess() {
  const defaultOptions = {
    loop: 1,
    autoplay: true,
    animationData: LottieSucess
  }

  return (
    <Container maxWidth='xl'>
      <Lottie options={defaultOptions} height={200} width={200} />
    </Container>
  )
}

export default Sucess
