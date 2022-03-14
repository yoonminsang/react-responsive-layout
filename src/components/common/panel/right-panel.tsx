import React from 'react';
import styled from 'styled-components';
import { useMenu } from '@/hooks/redux/use-menu';

interface IProps {
  rightPadding: boolean;
}

// TODO
const Wrapper = styled.aside<IProps>`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 72px;
  height: calc(100% - 65px);
  background-color: #fff;
  border-left: 1px solid ${(props) => props.theme.classumGrey};
  z-index: 5;
  transition: right 0.3s;
  position: fixed;
  right: ${(props) => {
    if (props.rightPadding) return '330px';
    return '0px';
  }};
`;

const RightPanel: React.FC<IProps> = ({ children, rightPadding }) => {
  const { onChangeSidebar } = useMenu();
  return (
    <Wrapper rightPadding={rightPadding}>
      <button type="button" onClick={() => onChangeSidebar('right')}>
        판넬 열기
      </button>
      오른쪽 판넬
      {children}
    </Wrapper>
  );
};

export default RightPanel;
