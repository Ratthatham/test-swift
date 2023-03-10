import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculationSlice/calculationSlice';
import formReducer from './formSlice/formSlice'
import shapeReducer from "./layoutSlice/layoutSlice"

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    form: formReducer,
    shape: shapeReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;