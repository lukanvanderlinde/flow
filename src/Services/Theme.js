import { createMuiTheme } from '@material-ui/core/styles'

import MontserratBlack from 'Assets/Fonts/Montserrat/MontserratBlack.ttf'
import MontserratBold from 'Assets/Fonts/Montserrat/MontserratBold.ttf'
import LatoRegular from 'Assets/Fonts/Lato/LatoRegular.ttf'

// !FALTA CUSTOMIZAR
// h5, h6, subtitle1, subtitle2, overline

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FED365'
    },
    secondary: {
      main: '#222222'
    },
    error: {
      main: '#ea202c'
    }
  },
  typography: {
    h1: {
      fontFamily: [
        'Montserrat-Black',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '3rem',
      src: `url(${MontserratBlack}) format('ttf')`
    },
    h2: {
      fontFamily: [
        'Montserrat-Black',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '1.625rem',
      textTransform: 'uppercase',
      src: `url(${MontserratBlack}) format('ttf')`
    },
    h3: {
      fontFamily: [
        'Montserrat-Black',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '1.375rem',
      src: `url(${MontserratBlack}) format('ttf')`
    },
    h4: {
      fontFamily: [
        'Montserrat-Black',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '0.8rem',
      // textTransform: 'uppercase',
      src: `url(${MontserratBlack}) format('ttf')`
    },
    body1: {
      fontFamily: [
        'Lato-Regular',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '1rem',
      src: `url(${LatoRegular}) format('ttf')`
    },
    body2: {
      fontFamily: [
        'Lato-Regular',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      color: '#222222',
      fontSize: '0.8rem',
      src: `url(${LatoRegular}) format('ttf')`
    },
    button: {
      fontFamily: ['Montserrat-Bold', 'Arial', 'Helvetica', 'sans- serif'],
      fontSize: '1rem',
      color: '#222222',
      textTransform: 'uppercase',
      textDecoration: 'none',
      src: `url(${MontserratBold}) format('ttf')`
    },
    caption: {
      fontFamily: ['Lato-Regular', 'Arial', 'Helvetica', 'sans- serif'],
      fontSize: '0.5rem',
      color: '#222222',
      textTransform: 'uppercase',
      textDecoration: 'none',
      src: `url(${LatoRegular}) format('ttf')`
    }
  }
})

export default Theme
