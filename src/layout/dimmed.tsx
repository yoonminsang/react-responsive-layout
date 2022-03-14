import React from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  isSidebar: boolean;
}

const Dimmed = styled.div<IProps>`
  ${(props) => {
    if (props.isSidebar) {
      return css`
        background-color: rgba(61, 68, 88, 0.9);
        pointer-events: unset;
      `;
    }
  }}

  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 0.3s;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 50;
`;

export default Dimmed;
