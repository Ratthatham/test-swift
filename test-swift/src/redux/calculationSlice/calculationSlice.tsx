import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as math from "mathjs";

interface CalculatorState {
    displayValue: string,
    previousValue: string | null,
    operator: string | null,
    waitingForOperate: boolean
}

const initialState : CalculatorState= {
    displayValue : "0",
    previousValue : null,
    operator: null,
    waitingForOperate: false
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        digitPressed: (state, action:PayloadAction<string>) => {
            const digit = action.payload;
            const displayValue = state.displayValue;
            if(state.waitingForOperate){
                state.displayValue = digit;
                state.waitingForOperate = false;
            } else {
                state.displayValue = displayValue === "0"? digit : displayValue + digit
            }
        },

        operatorPressed: (state, action: PayloadAction<string>) => {
            const operator = action.payload;
            const displayValue = state.displayValue;
            if (state.operator && !state.waitingForOperate) {
              const result = math.evaluate(`${state.previousValue}${state.operator}${state.displayValue}`)
              state.displayValue= String(result)
            }
            state.waitingForOperate = true;
            state.previousValue = displayValue;
            state.operator = operator;
          },
          
          clearPressed: (state) => {
            state.displayValue = '0';
            state.previousValue = null;
            state.operator = null;
            state.waitingForOperate = false;
          },  
    }
})
export const { digitPressed, operatorPressed, clearPressed } = calculatorSlice.actions;

export default calculatorSlice.reducer;