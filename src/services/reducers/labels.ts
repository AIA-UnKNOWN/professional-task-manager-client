import { createSlice } from '@reduxjs/toolkit';

interface Label {
  id: number;
  name: string;
}

interface LabelState {
  data: Array<Label>;
}

interface Action {
  payload: Array<Label>;
}

const initialState: LabelState = {
  data: [],
}

const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    setLabels: (state: LabelState, action: Action) => {
      state.data = action.payload;
    },
  }
});

export const { setLabels } = labelsSlice.actions;
export default labelsSlice.reducer;