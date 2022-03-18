import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
   colors: {
       gray: {
           "900": "#181B23",
           "800": "#47585B",
           "700": "#353646",
           "600": "#4B4D63",
           "500": "#616480",
           "400": "#797D9A",
           "300": "#9699B0",
           "200": "#B3B5C6",
           "150": "#F5F8FA",
           "100": "#D1D2DC",
           "50": "#EEEEF2"
       },
       white: {
           "100": "#F5F8FA",
           "0": "#FFFFFF"
       },
       yellow: {
           "400": "#FFBA08"
       }
   },
   fonts: {
       heading: "Poppins",
       body: "Poppins"
   },
   styles: {
       global: {
           body: {
               color: 'gray.50'
           }
       }
   }
})