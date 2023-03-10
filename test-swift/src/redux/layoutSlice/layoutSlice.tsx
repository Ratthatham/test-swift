import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShapeState {
  row: number;
  column: number;
  position: number;
}

const initialState: ShapeState = {
  row: 2,
  column: 3,
  position: 0,
};

const shapeSlice = createSlice({
  name: "shape",
  initialState,
  reducers: {
    sliceLeft: (state) => {
        if (state.position % state.column !== 0) {
          state.position -= 1;
        }
    },
    sliceRight: (state) => {
    if ((state.position + 1) % state.column !== 0) {
        state.position += 1;
    }
    },
    changeRow: (state, action: PayloadAction<number>) => {
    const newRow = action.payload;
    if (newRow * state.column + state.position < state.row * state.column) {
        state.row = newRow;
    }
    },
    randomPosition: (state) => {
    state.position = Math.floor(Math.random() * (state.row * state.column));
    },
  },
});

export default shapeSlice.reducer;
