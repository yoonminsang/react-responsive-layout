import React from 'react';
import styled from 'styled-components';

interface IProps {
  onChangeSidebar: () => void;
}

const Wrapper = styled.aside`
  overflow-x: hidden;
  overflow-y: scroll;
  width: 72px;
  height: calc(100% - 65px);
  background-color: #fff;
  border-left: 1px solid ${(props) => props.theme.classumGrey};
  z-index: 5;
  transition: right 0.3s;
  position: fixed;
  top: 65px;
  right: 0px;
`;

const RightPanel: React.FC<IProps> = ({ children, onChangeSidebar }) => {
  return (
    <Wrapper>
      <button type="button" onClick={onChangeSidebar}>
        판넬 열기
      </button>
      오른쪽 판넬
      {children}
    </Wrapper>
  );
};

export default RightPanel;
