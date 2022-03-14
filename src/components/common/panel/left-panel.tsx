import React from 'react';
import styled from 'styled-components';

interface IProps {
  isDesktop: boolean;
}

const Wrapper = styled.aside<IProps>`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 330px;
  z-index: 5;
  height: calc(100% - 65px);
  background-color: #fff;
  border-right: 1px solid ${(props) => props.theme.classumGrey};
  transition: all 0.3s;
  position: fixed;
  will-change: left;
  left: ${(props) => {
    if (props.isDesktop) return '0px';
    return '-330px';
  }};
`;

const LeftPanel: React.FC<IProps> = ({ isDesktop, children }) => {
  return (
    <Wrapper isDesktop={isDesktop}>
      왼쪽 판넬
      {children}
    </Wrapper>
  );
};

export default LeftPanel;
