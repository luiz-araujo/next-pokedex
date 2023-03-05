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
      green10: '#D8F4ED',
      green20: '#63a896', // disabled button
      green30: '#009845',
      green40: '#00833E',
      green60: '#006937',
      white: '#FFFFFF',
      gray10: '#F4F4F4', // search background
      gray20: '#e8e8e8', // menu separator
      gray30: '#acacac', // inputs border
      gray40: '#848484', // text without highlighting
      gray50: '#4a4a4a', // titles, pdp texts
      black: '#2d3a37', // absolute black to use in texts
      red10: '#FFEBEE',
      red40: '#d0021b',
      red60: '#B21327',
      yellow10: '#FFF3CB',
      yellow40: '#FFCB46', //alert
      yellow90: '#4D3300',
      blue10: '#E7ECFF',
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
