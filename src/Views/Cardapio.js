import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Paper
} from '@material-ui/core'

import MaterialTable from 'material-table'

import ImageHolder from 'Components/ImageHolder'
import FirebaseApp from 'Services/FirebaseApp'

// Logica de adicionar e remover
// Salvar compra no banco

function Cardapio() {
  const [isComprado, setIsComprado] = useState(false)
  const [listaProdutos, setListaProdutos] = useState(null)
  const produtos = []

  const [totalCompra, setTotalCompra] = useState(0)

  const [state, setState] = React.useState({
    columns: [
      { title: 'Item', field: 'item' },
      {
        title: 'Preço',
        field: 'preco'
      }
    ],
    data: []
  })

  const handleAddItem = (newItem) =>
    new Promise((resolve) => {
      setState((prevState) => {
        const data = [...prevState.data]
        data.push(newItem)
        return { ...prevState, data }
      })

      setTotalCompra(totalCompra + newItem.preco)
    })

  const handleSubmit = (event) => {
    event.preventDefault()

    const { rg } = event.target.elements

    const payload = {
      rg: rg.value,
      produtos: state.data,
      compra: new Date().toString(),
      total: totalCompra
    }

    try {
      FirebaseApp.database()
        .ref('servicos')
        .push(payload)
    } catch (error) {
      alert(error)
    }

    setIsComprado(true)
  }

  useEffect(() => {
    try {
      FirebaseApp.database()
        .ref('produtos')
        .once('value')
        .then(function(snapshot) {
          setListaProdutos(snapshot.val())
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (listaProdutos) {
    for (let i = 0; i < listaProdutos.length; i++) {
      produtos.push(
        <Grid item xs={6} key={i}>
          <Paper>
            <ImageHolder url={listaProdutos[i].foto} alt=' ' />
            <Box padding='0.5rem'>
              <Typography variant='subtitle1'>
                {listaProdutos[i].nome}
              </Typography>
              <Typography variant='subtitle2'>
                R$: {listaProdutos[i].preco}
              </Typography>
            </Box>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={() => {
                handleAddItem({
                  item: listaProdutos[i].nome,
                  preco: listaProdutos[i].preco
                })
              }}>
              Adicionar
            </Button>
          </Paper>
        </Grid>
      )
    }
  }

  const PurchaseResult = () => {
    if (isComprado) {
      return <Redirect push to={'/obrigado'} />
    } else {
      return <React.Fragment />
    }
  }

  return (
    <Container>
      <Box marginTop='2rem' marginBottom='2rem'>
        <Typography align='center' variant='h1'>
          Cardápio da Flow
        </Typography>
      </Box>

      <Grid
        container
        direction='row'
        justify='center'
        alignItems='flex-start'
        spacing={2}>
        {produtos}
      </Grid>

      {/* CHECKOUT */}
      <Grid
        container
        direction='column'
        justify='flex-start'
        alignItems='center'
        spacing={2}>
        <Grid item xs={12}>
          <Box marginTop='4rem'>
            <Typography align='center' variant='h3'>
              Finalizar Compra
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <MaterialTable
            title='Editable Example'
            columns={state.columns}
            data={state.data}
            options={{
              search: false,
              toolbar: false,
              paging: false
            }}
            editable={{
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve()
                    setState((prevState) => {
                      const data = [...prevState.data]
                      const removed = data.splice(data.indexOf(oldData), 1)

                      setTotalCompra(totalCompra - removed[0].preco)
                      return { ...prevState, data }
                    })
                  }, 600)
                })
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='flex-start'
            spacing={2}>
            <Grid item>
              <Typography variant='subtitle1'>TOTAL: </Typography>
            </Grid>

            <Grid item>
              <Typography variant='subtitle2'>{totalCompra}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              label='RG'
              name='rg'
              id='rg'
              type='text'
              placeholder='Qual é o número do seu RG?'
              variant='outlined'
              fullWidth
              required
            />
            <Box marginTop='1rem' marginBottom='6rem'>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                type='submit'>
                Comer!
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
      <PurchaseResult />
    </Container>
  )
}

export default Cardapio
