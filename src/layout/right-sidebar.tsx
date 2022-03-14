import React from 'react';
import styled from 'styled-components';

interface IStyle {
  isSidebar: boolean;
}

interface IProps extends IStyle {
  children: React.ReactNode;
  onChangeSidebar: () => void;
}

const Wrapper = styled.aside<IStyle>`
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  width: 338px;
  height: 100%;
  background-color: #fff;
  border-left: 1px solid ${(props) => props.theme.classumGrey};
  z-index: 100;
  transition: right 0.3s;
  will-change: right;
  top: 65px;
  right: ${(props) => {
    if (props.isSidebar) return '0px';
    return '-338px';
  }};
`;

const Inner = styled.div`
  position: relative;
  transition: left 0.3s;
  width: 330px;
  min-height: 100%;
  border-right: 1px solid ${(props) => props.theme.classumGrey};
  padding: 0 0 0 12px;
  background-color: #fff;
`;

const RightSidebar = React.forwardRef<HTMLElement, IProps>(({ isSidebar, children, onChangeSidebar }, ref) => {
  return (
    <Wrapper isSidebar={isSidebar} ref={ref}>
      <Inner>
        <button type="button" onClick={onChangeSidebar}>
          판넬 닫기
        </button>
        오른쪽 판넬{children}
      </Inner>
    </Wrapper>
  );
});

export default RightSidebar;
