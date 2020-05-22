import React from 'react';
import {
  CSSReset,
  ThemeProvider as DefaultThemeProvider,
  theme,
} from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    trueGray: theme.colors.gray,
  },
  fonts: {
    ...theme.fonts,
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
  },
  fontWeights: {
    ...theme.fontWeights,
  },
};

const ThemeProvider = (props) => (
  <DefaultThemeProvider theme={customTheme}>
    <CSSReset />
    {props.children}
  </DefaultThemeProvider>
);

export default ThemeProvider;
