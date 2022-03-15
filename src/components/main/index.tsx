import React from 'react';
import styled from 'styled-components';
import { TScreenSize } from '@/types';
import MainContent from './main-content';
import { isDesktopFn } from '@/utils/screen.util';
import Dummy from '../common/dummy';
import LeftPanel from '../common/panel/left-panel';

interface IProps {
  screenSize: TScreenSize;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
`;

const Main: React.FC<IProps> = ({ screenSize }) => {
  const isDesktop = isDesktopFn(screenSize);
  return (
    <Wrapper>
      <LeftPanel isDesktop={isDesktop}>{Dummy}</LeftPanel>
      <MainContent isDesktop={isDesktop} />
    </Wrapper>
  );
};

export default Main;
