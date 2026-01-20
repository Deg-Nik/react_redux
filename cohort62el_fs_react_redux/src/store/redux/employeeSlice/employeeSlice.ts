import { createAppSlice } from "store/createAppSlice"
import { EmployeeInitialState } from "./types"


const employeeInitialState: EmployeeInitialState  = {
  person: []
}

export const employeeSlice  = createAppSlice({
  name: "EMPLOYEE_CARD",
  initialState: employeeInitialState,
  reducers:{
    personCard: (state: EmployeeInitialState) => {
      state.person = state.person
    },
    deleteCard: () => employeeInitialState
  },
  selectors: {
    person: (state: EmployeeInitialState) => {
      return state.person
    }
  }
})

export const employeeSliceAction = employeeSlice.actions

export const employeeSliceSelectors = employeeSlice.selectors