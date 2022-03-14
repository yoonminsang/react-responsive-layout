import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSidebar } from '@/types/menu';

interface IState {
  sidebar: TSidebar;
}

const initialState: IState = {
  sidebar: null,
};

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeSidebar: (state, action: PayloadAction<TSidebar>) => {
      state.sidebar = action.payload;
    },
  },
});

const { actions, reducer: menuReducer } = slice;
const { changeSidebar } = actions;

export { menuReducer, changeSidebar };
