import { createAppSlice } from "store/createAppSlice"
import { EmployeeInitialState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { EmployeeData } from "lessons/EmployeeProject/types"


const employeeInitialState: EmployeeInitialState  = {
  person: []
}

export const employeeSlice  = createAppSlice({
  name: "EMPLOYEE_CARD",
  initialState: employeeInitialState,
  reducers:{
    personCard: (state: EmployeeInitialState, action: PayloadAction<EmployeeData>) => {
      state.person.push(action.payload)
      console.log(action);
      
    },
    deleteCard: (
      state: EmployeeInitialState,
      action: PayloadAction<string>
    ) =>{
      state.person = state.person.filter(
        (user)=> user.id !== action.payload
      );
    } ,
    deleteCards: () => employeeInitialState,
  },
  selectors: {
    person: (state: EmployeeInitialState) => state.person
  }
})

export const employeeSliceAction = employeeSlice.actions

export const employeeSliceSelectors = employeeSlice.selectors