import React from 'react';
import styled from 'styled-components';
import Dummy from '../common/dummy';

interface IProps {
  isDesktop: boolean;
}

const Wrapper = styled.div<IProps>`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 680px;
  height: 100%;
  margin-left: ${(props) => props.isDesktop && '330px'};
  padding: 20px;
`;

const MainContent: React.FC<IProps> = ({ isDesktop }) => {
  return <Wrapper isDesktop={isDesktop}>메인 컨텐츠{Dummy}</Wrapper>;
};

export default MainContent;
