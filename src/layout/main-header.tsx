import React from 'react';
import styled from 'styled-components';

interface IProps {
  onChangeSidebar: () => void;
}

const Wrapper = styled.header`
  height: 65px;
  border-bottom: 1px solid ${(props) => props.theme.classumGrey};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
`;

const MainHeader: React.FC<IProps> = ({ onChangeSidebar }) => {
  return (
    <Wrapper>
      <button type="button" onClick={onChangeSidebar}>
        사이드바 버튼
      </button>
      <h1>메인 헤더</h1>
    </Wrapper>
  );
};

export default MainHeader;
