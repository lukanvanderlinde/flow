import React from 'react'

// * Componentes
import {
  Card,
  CardContent,
  Button,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core'

import { CalendarToday, Schedule } from '@material-ui/icons'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

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

function CardViagem({ data, origem, destino, preco, tempo }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          spacing={2}>
          <Grid item>
            <Typography className={classes.title}>
              {origem}
              <ArrowForwardIosIcon className={classes.pos} /> {destino}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <CalendarToday className={classes.pos} />
              {data}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Schedule className={classes.pos} />
              {tempo} horas
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <MonetizationOnIcon className={classes.pos} />
              R$: {preco},00
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' size='small'>
              Reservar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardViagem
