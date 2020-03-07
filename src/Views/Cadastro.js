import React, { useState } from 'react'

// * Componentes
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  makeStyles
} from '@material-ui/core'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import CalendarToday from '@material-ui/icons/CalendarToday'
import Schedule from '@material-ui/icons/Schedule'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

import FirebaseApp from 'Services/FirebaseApp'

import { KeyboardDatePicker } from '@material-ui/pickers'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    // maxWidth: 742
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    color: '#fed365',
    textAlign: 'center',
    fontWeight: 'Bold',
    fontSize: 16
  },
  pos: {
    position: 'relative',
    top: 6,
    paddingRight: 3,
    paddingLeft: 3,
    color: '#222222'
  }
})

function Cadastro({ ...props }) {
  const classes = useStyles()

  const [isSearched, setIsSearched] = useState(false)
  const [cardExpiry, setCardExpiry] = useState(null)
  const [nascimento, setNascimento] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const {
      nome,
      surname,
      rg,
      celular,
      mail,
      cardName,
      cardNumber,
      cardCvc,
      referal
    } = event.target.elements

    let DataNascimento = 'nao preencheu'
    let VencimentoCartao = 'nao preencheu'

    if (nascimento) {
      DataNascimento = nascimento.toString()
    }
    if (cardExpiry) {
      const temp = new Date(cardExpiry)

      VencimentoCartao = `${temp.getMonth() + 1}/${temp.getFullYear()}`
    }

    const payload = {
      viagem: {
        origem: props.match.params.origem,
        destino: props.match.params.destino,
        data: props.match.params.data
      },
      cliente: {
        nome: nome.value,
        surname: surname.value,
        rg: rg.value,
        nascimento: DataNascimento,
        celular: celular.value,
        mail: mail.value
      },
      compra: {
        data: new Date(),
        cardName: cardName.value,
        cardNumber: cardNumber.value,
        cardCvc: cardCvc.value,
        cardExpiry: VencimentoCartao,
        referal: referal.value
      }
    }

    try {
      FirebaseApp.database()
        .ref('vendas')
        .push(payload)
    } catch (error) {
      alert(error)
    }

    setIsSearched(true)
  }

  const SearchResult = () => {
    if (isSearched) {
      return <Redirect push to={'/sucesso'} />
    } else {
      return <React.Fragment />
    }
  }

  return (
    <Container maxWidth='md'>
      <Box marginTop='2rem' marginBottom='2rem'>
        <Typography variant='h1'>Estamos quase lá!</Typography>
        <Typography variant='body1'>
          Agora só falta o cadastro e os dados para a reserva da passagem...
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>
              Confira os dados da sua viagem
              <span role='img' aria-label=' '>
                {' '}
                🚌
              </span>
            </Typography>
            <Box maxWidth='500px' marginTop='1rem' marginBottom='1rem'>
              <Card className={classes.root}>
                <CardContent>
                  <Grid
                    container
                    direction='row'
                    justify='space-between'
                    alignItems='center'
                    spacing={2}>
                    <Grid item xs={12}>
                      <Typography className={classes.title}>
                        {props.match.params.origem}
                        <ArrowForwardIosIcon className={classes.pos} />
                        {props.match.params.destino}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        <CalendarToday className={classes.pos} />
                        {props.match.params.data}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        <Schedule className={classes.pos} />
                        {props.match.params.tempo} horas
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>
                        <MonetizationOnIcon className={classes.pos} />
                        R$: {props.match.params.preco},00
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          justify='flex-start'
          alignItems='flex-start'
          spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4'>
              Para finalizarmos, precisamos te conhecer melhor
              <span role='img' aria-label=' '>
                {' '}
                🥰
              </span>
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Nome'
              name='nome'
              id='nome'
              type='text'
              placeholder='Qual o seu nome?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Sobrenome'
              name='surname'
              id='surname'
              type='text'
              placeholder='Qual o seu sobrenome?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
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
          </Grid>

          <Grid item xs={6}>
            <KeyboardDatePicker
              fullWidth
              format='DD/MM/YYYY'
              label='Data de nascimento'
              name='nascimento'
              id='nascimento'
              inputVariant='outlined'
              value={nascimento}
              onChange={(date) => setNascimento(date)}
              animateYearScrolling
              minDateMessage={'Essa data não é válida...'}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Celular'
              name='celular'
              id='celular'
              type='phone'
              placeholder='Qual é o número do whatsapp?'
              variant='outlined'
              fullWidth
              required
            />
            <Typography variant='caption'>
              É importante que esse seja o seu celular para te enviarmos a
              confirmação pelo whatsapp.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Email'
              name='mail'
              id='mail'
              type='mail'
              placeholder='Qual o seu email?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant='h4'>
              Agora os dados de pagamento
              <span role='img' aria-label=' '>
                {' '}
                💰
              </span>
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Nome impresso no cartão'
              name='cardName'
              id='cardName'
              type='text'
              placeholder='Qual é o nome impresso no cartão?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Número do cartão'
              name='cardNumber'
              id='cardNumber'
              type='text'
              placeholder='Qual é o número do cartão?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <KeyboardDatePicker
              fullWidth
              format='MM/YYYY'
              label='Data de validade'
              name='cardExpiryPicker'
              id='cardExpiryPicker'
              inputVariant='outlined'
              value={cardExpiry}
              onChange={(data) => {
                setCardExpiry(data)
              }}
              KeyboardButtonProps={{
                'aria-label': 'Mude a data de validade'
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Código de segurança'
              name='cardCvc'
              id='cardCvc'
              type='text'
              placeholder='Qual é o código de segurança do cartão?'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label='Código promocional'
              name='referal'
              id='referal'
              type='text'
              placeholder='Você tem um código de promocional?'
              variant='outlined'
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={12}>
            <Box paddingTop='2rem' marginBottom='2rem'>
              <Button variant='contained' color='primary' type='submit'>
                Reservar minha viagem!
                <span role='img' aria-label=' '>
                  🚌
                </span>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <SearchResult />
    </Container>
  )
}

export default Cadastro
