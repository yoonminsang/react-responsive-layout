import { SCREEN } from '@/constants';
import { TScreenSize } from '@/types';

export const screenSizeFn = (width: number): TScreenSize => {
  if (width < SCREEN.small) return 'xsmall';
  if (width < SCREEN.middle) return 'small';
  if (width < SCREEN.large) return 'middle';
  if (width < SCREEN.xlarge) return 'large';
  if (width < SCREEN.xxlarge) return 'xlarge';
  return 'xxlarge';
};

export const isDesktopFn = (screenSize: TScreenSize) => screenSize === 'xlarge' || screenSize === 'xxlarge';
