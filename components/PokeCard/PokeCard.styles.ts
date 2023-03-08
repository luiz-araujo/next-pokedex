import { styled } from '@/theme/stitches.config';

export const Title = styled('h2', {
  backgroundColor: '#fcf8f4',
  color: '#4d4d4d',
  fontSize: '20px',
  left: '-10%',
  lineHeight: '115%',
  textAlign: 'center',
  transform: 'rotatez(-42deg)',
  transitionDuration: '0.3s',
  transitionProperty: 'top',
  top: '46%',
  width: '120%',
  position: 'absolute',
  zIndex: 4,
});

export const Card = styled('li', {
  listStyleType: 'none',
  paddingTop: '150%',
  transformOrigin: 'top left',
  transform: 'skewY(4.398705355deg) rotatez(14.03624deg)',
  transitionProperty: 'zIndex',
  transitionDuration: '0.3s',
  zIndex: 1,

  '&:hover': {
    transform: 'skewY(0deg) rotatez(14.03624deg)',
    zIndex: 4,
  },

  '&:hover ${Title}': {
    left: '-6%',
    top: '64%',
    width: '115%',
  },

  '&:hover ${CardItem}': {
    transform: 'rotate(-14.23624deg) translate(5.5%, 15%) scale(1.4)',
  },

  '&:hover ${Image}:nth-child(2n)': {
    width: '60%',
    transform: 'translateX(0) translateY(38%) rotatez(135deg)',
  },

  '&:hover ${Image}:nth-child(2n + 1)': {
    width: '100%',
    transform: 'translateX(-65%) translateY(-75%) rotatez(-45deg)',
  },
});

export const CardItem = styled('div', {
  position: 'absolute',
  zIndex: 2,
  width: '98%',
  height: '95%',
  top: 0,
  backgroundColor: '#dadddf',
  borderRadius: '2vw',
  boxShadow: 'inset 0px 0px 0px 7vw #fcf8f4',
  boxSizing: 'border-box',
  filter: 'drop-shadow(2px 6px 3px rgba(0, 0, 0, 0.4))',
  transform: 'rotate(0deg) translate(0, 0)',
  transitionProperty: 'transform',
  transitionDuration: '0.3s',

  '@media (min-width: 300px)': {
    boxShadow: 'inset 0px 0px 0px 4vw #fcf8f4',
  },

  '@media (min-width: 600px)': {
    boxShadow: 'inset 0px 0px 0px 2.8vw #fcf8f4',
  },

  '@media (min-width: 900px)': {
    boxShadow: 'inset 0px 0px 0px 2.2vw #fcf8f4',
  },

  '@media (min-width: 1200px)': {
    boxShadow: 'inset 0px 0px 0px 1.8vw #fcf8f4',
  },

  '@media (min-width: 1500px)': {
    boxShadow: 'inset 0px 0px 0px 1.5vw #fcf8f4',
  },
});

export const Text = styled('p', {
  backgroundColor: '#fcf8f4',
  color: '#4d4d4d',
  fontSize: '1.4em',
  padding: '2% 2.5% 2% 2.5%',
  position: 'absolute',
  zIndex: 4,

  '&:nth-child(2n)': {
    top: '0',
    right: '5%',
  },

  '&:nth-child(2n + 1)': {
    bottom: '0',
    left: '5%',
    transform: 'rotatez(180deg)',
  },
});

export const Image = styled('img', {
  left: '50%',
  top: '50%',
  width: '84%',
  position: 'absolute',
  zIndex: 4,

  '&:nth-child(2n)': {
    transform: 'translateX(-30%) translateY(5%) rotatez(135deg)',
    transitionProperty: 'width, transform',
    transitionDuration: '0.3s',
  },

  '&:nth-child(2n + 1)': {
    transform: 'translateX(-70%) translateY(-105%) rotatez(-45deg)',
    transitionProperty: 'width, transform',
    transitionDuration: '0.3s',
  },
});
