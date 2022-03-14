import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { changeSidebar } from '@/store/menu';
import { TSidebar } from '@/types/menu';

export const useMenu = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: RootState) => state.menu.sidebar);
  const onChangeSidebar = (sidebar: TSidebar) => dispatch(changeSidebar(sidebar));
  return { sidebar, onChangeSidebar };
};
