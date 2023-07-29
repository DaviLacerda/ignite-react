import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            body:{
                bg: 'light.500'
            }
        }
    },
    components: {
        Heading: {
            baseStyle: {
                color: "dark.600"
            }
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    colors: {
        highlight: "#FFBA08",
        dark: {
            100: "#99999980",
            300: "#999999",
            600: "#47585B",
            900: '#000000',
        },
        light: {
            300: "#DADADA",
            500: "#F5F8FA",
            900: "#FFFFFF"
        }
    }
})