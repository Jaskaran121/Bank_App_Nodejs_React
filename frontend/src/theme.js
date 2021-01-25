import { theme as defaultTheme } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  ...defaultTheme,
  initialColorMode: "light",
  useSystemColorMode: true,
  styles: {
    global : {
      body: {
        fontFeatureSettings: "'kern', 'pnum', 'lnum'"
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        boxShadow: "none !important", 
        borderRadius: "0px",
      },
      sizes: {
      },
      variants: {
        "custom": {
          backgroundColor: "black",
          color: "white",
          border: "1px solid",
          fontSize: "15px",
          _hover: {
            backgroundColor: "white",
            color: "black"
          }
        }
      },
    },
  },
  fonts: {
    body: 'stratford,georgia,serif',
    heading: "stratford,georgia,serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...defaultTheme.colors,
    black: '#333333',
    primary: '#0099DB',
    secondary: '#034A85',
    mode: {
      light: {
        ...defaultTheme.colors,
        primary: '#659bc7',
        secondary: '#034A85',
      },
      dark: {
        ...defaultTheme.colors,
        secondary: '#0099DB',
        primary: '#659bc7',
      },
    },
  },
})

export default theme;