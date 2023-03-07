import { styled } from '@/theme/stitches.config';

export const Wrapper = styled('div', {
  textAlign: 'center',
  marginBottom: '50px',
});

export const TotalExp = styled('h4', {
  marginBottom: '25px',
});

export const FinalResult = styled('h1', {
  variants: {
    color: {
      winner: { color: '$green40' },
      loser: { color: '$red40' },
    },
  },
  marginTop: '25px',
});

export const Cards = styled('ul', {
  display: 'grid',
  margin: '0 auto',

  '@media (min-width: 300px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '3vw',
    maxWidth: '300px',
  },

  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGgap: '2vw',
    maxWidth: '600px',
  },

  '@media (min-width: 900px)': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridColumnGgap: '1vw',
    maxWidth: '900px',
  },
});
