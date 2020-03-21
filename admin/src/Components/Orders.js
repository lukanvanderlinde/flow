import React, { useState, useEffect } from 'react'

import FirebaseApp from 'Services/FirebaseApp'

import { makeStyles } from '@material-ui/core/styles'

import {
  TableBody,
  Table,
  TableCell,
  TableHead,
  Box,
  TableRow
} from '@material-ui/core/'

import Title from './Title'

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function Orders() {
  const classes = useStyles()

  const [vendasViagens, setVendasViagens] = useState(null)

  let rows = []

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('vendas')
        .on('value', (snapshot) => {
          const values = snapshot.val()

          setVendasViagens(values)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (vendasViagens) {
    for (var vendas in vendasViagens) {
      if (vendasViagens.hasOwnProperty(vendas)) {
        rows.push({
          nome: vendasViagens[vendas].cliente.nome,
          sobrenome: vendasViagens[vendas].cliente.surname,
          whats:
            'https://web.whatsapp.com/send?phone=55' +
            vendasViagens[vendas].cliente.celular,
          rg: vendasViagens[vendas].cliente.rg,
          origem: vendasViagens[vendas].viagem.origem,
          destino: vendasViagens[vendas].viagem.destino,
          data: vendasViagens[vendas].viagem.data
        })
      }
    }
  }

  return (
    <Box>
      <Title>Clientes</Title>

      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Sobrenome</TableCell>
            <TableCell>Whats</TableCell>
            <TableCell>Origem</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.rg}>
              <TableCell align='left'>{row.nome}</TableCell>
              <TableCell align='left'>{row.sobrenome}</TableCell>
              <TableCell align='left'>
                <a rel='noopener noreferrer' target='_blank' href={row.whats}>
                  Whats
                </a>
              </TableCell>
              <TableCell align='left'>{row.origem}</TableCell>
              <TableCell align='left'>{row.destino}</TableCell>
              <TableCell align='left'>{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
