import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 20,
        marginBottom: 4,
        marginTop: 3,
        textDecoration: "underline",
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        textUnderlineOffset: 6
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "sans-serif"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

const theme = extendTheme({
  colors,
  components,
  config,
  fonts,
  styles
})

export default theme;