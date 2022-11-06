import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  id: number | null,
  categoryName: string,
}

interface Action {
  payload: {
    id: number | null,
    categoryName: string,
  }
}

const initialState: NavigationState = {
  id: null,
  categoryName: '',
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationId: (state: NavigationState, action: Action) => {
      return {
        ...state,
        id: action.payload.id,
        categoryName: action.payload.categoryName,
      }
    },
  }
});

export const { setNavigationId } = navigationSlice.actions;
export default navigationSlice.reducer;