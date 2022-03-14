import { DefaultTheme } from 'styled-components';
import { SCREEN } from '@/constants';

const theme: DefaultTheme = {
  screenXSmall: `@media all and (max-width:${SCREEN.small}px)`,
  screenSmall: `@media all and (min-width:${SCREEN.small}px) and (max-width:${SCREEN.middle}px)`,
  screenMiddle: `@media all and (min-width:${SCREEN.middle}px) and (max-width:${SCREEN.large}px)`,
  screenLarge: `@media all and (min-width:${SCREEN.large}px) and (max-width:${SCREEN.xlarge}px)`,
  screenXLarge: `@media all and (min-width: ${SCREEN.xlarge}px)`,
  mobile: '@media all and (max-width: 480px)',
  tablet: '@media all and (min-width:480px) and (max-width:1200px)',
  desktop: '@media all and (min-width: 1200px)',
  lightGrey: '#eee',
  grey: '#e3e3e3',
  darkGrey: '#c1c1c1',
  white: '#fcfcfc',
  classumGrey: '#d7dbe7',
};

export default theme;
