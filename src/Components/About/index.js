import React from 'react'

import 'Assets/Images/Boneco.css'
import 'Assets/Images/PDV.css'

// * Componentes
import { Box, Grid, Paper, Typography, Container } from '@material-ui/core'

function NavBar() {
  return (
    <Container maxWidth='md'>
      <Paper>
        <Box padding='1rem' id='about'>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Typography variant='h3'>Olá, nós somos a Flow.</Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant='body1'>
                Acreditamos que viajar de Ônibus Rodoviário pode ser uma
                experiência bacana, sem perrengues, sem filas de guichê, sem
                cobranças de taxas desnecessárias (que muitas vezes nem
                percebemos que estamos pagando) e sem aquelas várias paradas
                chatas que sempre aumentam (e muito) o tempo da viagem. Para
                nós, a viagem não começa apenas quando colocamos os pés na areia
                ou fazemos check-in no hotel.
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant='body1'>
                As boas memórias e grandes experiências devem ser cultivadas
                desde o início, ou melhor, desde o primeiro click. Na Flow a
                viagem é simples e divertida. Você escolhe seu destino, compra
                rapidinho em nossa plataforma e pronto, já pode embarcar. Nós
                enviaremos a passagem e outras informações no seu Whatsapp.
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant='body1'>
                Durante a viagem economizamos o seu tempo evitando e otimizando
                as paradas. Mas e se você sentir fome? Calma, nós não vamos te
                deixar na mão! É só aproveitar as comidinhas que oferecemos em
                nosso serviço de bordo. Sejam bem-vindos a Flow! Nós nascemos
                para proporcionar uma experiência incrível em todos os momentos
                da sua jornada. Queremos fazer parte do seu álbum de boas
                memórias.
              </Typography>
            </Grid>
            <Grid item sm={12}>
              <Typography variant='subtitle1'>#vainoflow</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default NavBar
