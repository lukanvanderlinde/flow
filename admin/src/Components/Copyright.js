import React from 'react'

import { Typography, Link, Box } from '@material-ui/core'

const Copyright = () => (
  <Box pt={4}>
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://vainoflow.com.br/'>
        Vai no Flow
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </Box>
)

export default Copyright
