import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import MainHeader from '@/layout/main-header';
import Sidebar from '@/layout/sidebar';
import Dimmed from '@/layout/dimmed';
import { TScreenSize } from '@/types';
import { useMenu } from '@/hooks/redux/use-menu';
import RightSidebar from './right-sidebar';
import Dummy from '@/components/common/dummy';
import RightPanel from '@/layout/right-panel';

interface IProps {
  screenSize: TScreenSize;
  isRightPanel?: boolean;
}

const Wrapper = styled.div<{ isPadding: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding-top: 65px;
  transition: transform 0.3s;
  transform: ${(props) => props.isPadding && 'translateX(330px)'};
  background-color: ${(props) => props.theme.lightGrey};
`;

const Layout: React.FC<IProps> = ({ children, screenSize, isRightPanel = false }) => {
  const sidebarRef = useRef<HTMLElement>(null);
  const rightSidebarRef = useRef<HTMLElement>(null);
  const { sidebar, onChangeSidebar } = useMenu();

  const onRemoveCaseSidebar = useCallback(
    (e: React.MouseEvent) => {
      if (!sidebar) return;
      if (screenSize === 'xxlarge') return;
      if (sidebarRef.current && sidebarRef.current.contains(e.target as HTMLElement)) return;
      if (rightSidebarRef.current && rightSidebarRef.current.contains(e.target as HTMLElement)) return;
      onChangeSidebar(null);
    },
    [sidebar, screenSize, onChangeSidebar],
  );

  const onRemoveSidebar = useCallback(() => {
    onChangeSidebar(null);
  }, [onChangeSidebar]);

  const onChangeLeftSidebar = useCallback(() => {
    if (sidebar !== 'left') onChangeSidebar('left');
    else onChangeSidebar(null);
  }, [onChangeSidebar, sidebar]);

  const onChangeRightSidebar = useCallback(() => {
    onChangeSidebar('right');
  }, [onChangeSidebar]);

  return (
    <>
      <Wrapper onClick={onRemoveCaseSidebar} isPadding={sidebar === 'left' && screenSize === 'xxlarge'}>
        <MainHeader onChangeSidebar={onChangeLeftSidebar} />
        <Dimmed isSidebar={screenSize !== 'xxlarge' && sidebar !== null} />
        {children}
      </Wrapper>
      <Sidebar isSidebar={sidebar === 'left'} ref={sidebarRef}>
        {Dummy}
      </Sidebar>
      {isRightPanel && (
        <>
          <RightPanel onChangeSidebar={onChangeRightSidebar}>{Dummy}</RightPanel>
          <RightSidebar isSidebar={sidebar === 'right'} ref={rightSidebarRef} onChangeSidebar={onRemoveSidebar}>
            {Dummy}
          </RightSidebar>
        </>
      )}
    </>
  );
};

export default Layout;
