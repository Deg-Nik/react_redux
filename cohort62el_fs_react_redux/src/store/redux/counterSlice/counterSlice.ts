import { createAppSlice } from "store/createAppSlice";
import { CounterSliceState } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";


const counterInitialState: CounterSliceState = {
  count: 0
}

export const counterSlice = createAppSlice({
  // name имя для Slice
  name: "COUNTER",
  // initialState значение по умолчанию
  initialState: counterInitialState,
  // reducers обьект содержащий функции и изменяет стейт
  reducers: {
    plus: (state: CounterSliceState) => {
      state.count = state.count + 1
    },
    minus: (state: CounterSliceState) => {
      state.count = state.count - 1
    },
    multiply: (state: CounterSliceState, action: PayloadAction<number>) => {
      console.log(action);
      state.count = Number((state.count * action.payload).toFixed(3))
    },
    divide: (state: CounterSliceState, action: PayloadAction<number>) => {
      state.count = Number((state.count / action.payload).toFixed(2))
    }
  },
  // selectors прописываем какие данные передать компонентам
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
});

// counterSlice создает action для каждого reducer
export const counterSliceAction = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors