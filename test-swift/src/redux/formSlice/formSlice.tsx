import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormValues = {
    title: string;
    firstName: string;
    lastName: string;
    birthday: string;
    nationality: string;
    citizenId: string;
    gender: string[];
    mobileNumber: string;
    countryCode: string;
    phoneNumber: string;
    passportNumber: string;
    expectedSalary: string;
};

type FormState = {
    formValues: FormValues;
};

const initialState: FormState = {
    formValues: {
      title: '',
      firstName: '',
      lastName: '',
      birthday: '',
      nationality: '',
      citizenId: '',
      gender: [],
      mobileNumber: '',
      countryCode: '',
      phoneNumber: '',
      passportNumber: '',
      expectedSalary: '',
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormValue: (state, action:PayloadAction<FormValues>) => {
            state.formValues = action.payload
        },
    }
})
export const { setFormValue } = formSlice.actions;
export default formSlice.reducer;