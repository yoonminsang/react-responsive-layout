import React from 'react';
import styled from 'styled-components';

const DummyStyle = styled.div`
  height: 30px;
`;

const Dummy = Array(30)
  .fill(null)
  // eslint-disable-next-line react/no-array-index-key
  .map((_, i) => <DummyStyle key={i}>{i}</DummyStyle>);

export default Dummy;
