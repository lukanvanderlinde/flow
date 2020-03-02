import React, { useEffect, useState } from 'react'

// * Componentes
import { Box, Typography } from '@material-ui/core'

import FirebaseApp from 'Services/FirebaseApp'
import CardViagem from 'Components/CardViagem'

function ListarViagens() {
  const [listaProximasViagens, setListaProximasViagens] = useState(null)

  const viagens = []

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('viagens')
        .once('value')
        .then(function(snapshot) {
          console.log(snapshot.val())
          setListaProximasViagens(snapshot.val())
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (listaProximasViagens) {
    listaProximasViagens.forEach((viagem) => {
      viagens.push(
        <Box marginBottom='1rem' marginTop='1rem'>
          <CardViagem
            data={viagem.data}
            origem={viagem.origem}
            destino={viagem.destino}
            preco={viagem.preco}
            tempo={viagem.tempo}
          />
        </Box>
      )
    })

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

export default ListarViagens
