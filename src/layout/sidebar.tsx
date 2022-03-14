import React from 'react';
import styled from 'styled-components';

interface IProps {
  isSidebar: boolean;
  children: React.ReactNode;
}

const Wrapper = styled.aside<IProps>`
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  transition: left 0.3s;
  height: 100%;
  z-index: 100;
  top: 0;
  will-change: left;
  left: ${(props) => {
    if (props.isSidebar) return '0px';
    return '-330px';
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

const Sidebar = React.forwardRef<HTMLElement, IProps>(({ isSidebar, children }, ref) => {
  return (
    <Wrapper isSidebar={isSidebar} ref={ref}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
});

export default Sidebar;
