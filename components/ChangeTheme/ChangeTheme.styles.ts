import * as Switch from '@radix-ui/react-switch';
import { styled } from '@/theme/stitches.config';

export const SwitchWrapper = styled('div', {
  position: 'absolute',
  right: '20px',
  top: '20px',
});

export const Flex = styled('div', { alignItems: 'center', display: 'flex' });

export const SwitchLabel = styled('label', {
  color: '$gray70',
  fontSize: 15,
  lineHeight: 1,
  paddingRight: 15,
});

export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  backgroundColor: '$gray70',
  borderRadius: '9999px',
  boxShadow: `0 2px 10px $gray70`,
  height: 25,
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  width: 42,
  '&:focus': { boxShadow: `0 0 0 2px $gray70` },
  '&[data-state="checked"]': { backgroundColor: '$gray70' },
});

export const SwitchThumb = styled(Switch.Thumb, {
  backgroundColor: '$white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $gray70`,
  display: 'block',
  height: 21,
  transform: 'translateX(2px)',
  transition: 'transform 100ms',
  width: 21,
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const ThemeBlock = styled('span', {
  position: 'absolute',
  top: '0',
  left: 0,
  borderRight: 'none',
  right: 0,
  width: '100vw',
  height: '100vh',
  bottom: '0',
  overflow: 'auto',

  variants: {
    themeColor: {
      light: { backgroundColor: '#FFF' },
      dark: { backgroundColor: '#000' },
    },
  },
});
