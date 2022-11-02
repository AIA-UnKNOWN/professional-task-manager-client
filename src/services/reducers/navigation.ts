import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  id: number | null,
}

interface Action {
  payload: number | null,
}

const initialState: NavigationState = {
  id: null,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationId: (state: NavigationState, action: Action) => {
      state.id = action.payload;
    },
  }
});

export const { setNavigationId } = navigationSlice.actions;
export default navigationSlice.reducer;