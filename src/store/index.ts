import { combineReducers } from 'redux';
import { menuReducer } from './menu';

const rootReducer = combineReducers({
  menu: menuReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { rootReducer, RootState };
