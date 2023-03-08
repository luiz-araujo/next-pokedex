// eslint-disable-next-line no-restricted-imports
import { CSS as StitchesCSS, createStitches } from '@stitches/react';
import {
  MargemBoldWoff,
  MargemBoldWoff2,
  MargemMediumWoff,
  MargemMediumWoff2,
  MargemRegularWoff,
  MargemRegularWoff2,
} from './fonts';

export type { VariantProps } from '@stitches/react';
export type { $$StyledComponentProps } from '@stitches/react/types/styled-component';
export type CSS = StitchesCSS<typeof config>;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  theme: {
    fonts: {
      main: "'Margem', fallback-font, sans-serif",
    },
    space: {
      100: '0.25rem', // 4px
      200: '0.5rem', // 8px
      300: '0.75rem', // 12px
      400: '1rem', // 16px
      500: '1.25rem', // 20px
      600: '1.5rem', // 24px
      700: '1.75rem', // 28px
      800: '2rem', // 32px
      900: '2.25rem', // 36px
      1000: '2.5rem', // 40px
      1100: '2.75rem', // 44px
      1200: '3rem', // 48px
      1300: '3.25rem', // 52px
      1400: '3.5rem', // 56px
      1500: '3.75rem', // 60px
      1600: '4rem', // 64px
    },
    fontSizes: {
      100: '0.625rem', // 10px
      200: '0.75rem', // 12px
      300: '0.875rem', // 14px
      400: '1rem', // 16px
      500: '1.25rem', // 20px
      600: '1.5rem', // 24px
      700: '2rem', // 32px
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    radii: {
      circle: '50%',
      pill: '999rem',
      100: '0.25rem',
      200: '0.5rem',
      300: '0.75rem',
    },
    lineHeights: {
      tight: 1,
      medium: 1.2,
      large: 1.5,
    },
    borderWidths: {
      thin: '1px',
      medium: '2px',
      large: '3px',
    },
    zIndices: {
      100: '1',
      200: '2',
      300: '3',
      400: '4',
      max: '9',
    },
    shadows: {
      red40: '0px 1px 8px rgba(208, 2, 27, 0.33)',
      green40: '0px 1px 8px rgba(0, 105, 55, 0.28)',
      gray40: '0px 1px 8px rgba(0, 0, 0, 0.15)',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      green10: '#B8E468',
      green20: '#85A44B',
      green30: '#475828',
      green40: '#51652E',
      green50: '#323E1C',
      gray10: '#F4F4F4',
      gray20: '#e8e8e8',
      gray30: '#A6A6A6',
      gray40: '#8C8C8C',
      gray50: '#40403F',
      gray60: '#737372',
      gray70: '#262625',
      red10: '#E0A5A3',
      red20: '#DA7E78',
      red30: '#CE534E',
      red40: '#BB0102',
      red50: '#8E1715',
      yellow10: '#FFF3CB',
      yellow20: '#FFCB46',
      yellow30: '#D9AD2B',
      yellow40: '#BFA760',
      yellow50: '#F2D680',
      yellow60: '#8C6E35',
      yellow70: '#593B16',
      yellow80: '#4D3300',
      blue10: '#D0E8F4',
      blue20: '#94ABBD',
      blue30: '#768AA5',
      blue40: '#5D6E8A',
      blue50: '#32425B',
      blue90: '#000933',
    },
  },
  media: {
    mobile: '(max-width: 32.4375em)', // 519px
    tablet: '(min-width: 32.5em)', // 520px
    touch: '(max-width: 64em)', // 1024px
    desktop: '(min-width: 64.0625em)', // 1025px
    prefersMotion: '(prefers-reduced-motion: no-preference)',
    hoverBased: '(hover: hover)',
    hoverNone: '(hover: none)',
  },
});

// define the dark theme
export const darkTheme = createTheme({
  colors: {
    black: '#FFF',
    white: '#000',
    green10: '#323E1C',
    green20: '#51652E',
    green30: '#475828',
    green40: '#85A44B',
    green50: '#B8E468',
    gray10: '#262625',
    gray20: '#737372',
    gray30: '#40403F',
    gray40: '#8C8C8C',
    gray50: '#A6A6A6',
    gray60: '#e8e8e8',
    gray70: '#F4F4F4',
    red10: '#8E1715',
    red20: '#BB0102',
    red30: '#CE534E',
    red40: '#DA7E78',
    red50: '#E0A5A3',
    yellow10: '#4D3300',
    yellow20: '#593B16',
    yellow30: '#8C6E35',
    yellow40: '#F2D680',
    yellow50: '#BFA760',
    yellow60: '#D9AD2B',
    yellow70: '#FFCB46',
    yellow80: '#FFF3CB',
    blue10: '#000933',
    blue20: '#32425B',
    blue30: '#5D6E8A',
    blue40: '#768AA5',
    blue50: '#94ABBD',
    blue90: '#D0E8F4',
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    // Remove built-in form typography styles
    'input, button, textarea, select': {
      font: 'inherit',
    },
  },

  fieldset: {
    border: 0,
  },

  '@font-face': [
    {
      fontFamily: 'Margem',
      src: `local('Margem'), url('${MargemRegularWoff2}') format('woff2'), url('${MargemRegularWoff}') format('woff')`,
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
    {
      fontFamily: 'Margem',
      src: `local('Margem'), url('${MargemMediumWoff2}') format('woff2'), url('${MargemMediumWoff}') format('woff')`,
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
    {
      fontFamily: 'Margem',
      src: `local('Margem'), url('${MargemBoldWoff2}') format('woff2'), url('${MargemBoldWoff}') format('woff')`,
      fontWeight: 700,
      fontStyle: 'normal',
      fontDisplay: 'optional',
    },
    {
      fontFamily: 'fallback-font',
      src: 'local("Arial")',
      // @ts-expect-error these properties are valid CSS, but is missing on stitches
      // @see https://github.com/stitchesjs/stitches/issues/943
      ascentOverride: '80.67%',
      descentOverride: '19.78%',
      lineGapOverride: '0.00%',
      sizeAdjust: '103.64%',
    },
  ],
});
