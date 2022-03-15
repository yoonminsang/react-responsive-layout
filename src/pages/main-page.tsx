import React from 'react';
import useWindowSize from '@/hooks/use-window-size';
import Layout from '@/layout';
import Main from '@/components/main';
import { screenSizeFn } from '@/utils/screen.util';

// TODO: 스크린 사이즈 리덕스?
const MainPage: React.FC = () => {
  const { width } = useWindowSize();
  const screenSize = screenSizeFn(width);
  return (
    <Layout screenSize={screenSize} isRightPanel>
      <Main screenSize={screenSize} />
    </Layout>
  );
};

export default MainPage;
