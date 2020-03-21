import React, { useEffect, useState } from 'react'

import FirebaseApp from 'Services/FirebaseApp'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core/'
import Title from './Title'

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
})

export default function Faturado() {
  const classes = useStyles()

  const [vendas, setVendas] = useState(0)

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('vendas')
        .on('value', (snapshot) => {
          const values = snapshot.val()

          setVendas(Object.keys(values).length)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Box>
      <Title>Total de Vendas</Title>
      <Typography variant='h4'>{vendas}</Typography>
      <Typography color='textSecondary' className={classes.depositContext}>
        em {new Date().toDateString()}
      </Typography>
    </Box>
  )
}
