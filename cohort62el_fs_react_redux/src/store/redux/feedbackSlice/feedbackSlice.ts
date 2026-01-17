import { createAppSlice } from "store/createAppSlice"

const feedbackInitialState = {
  countLike: 0,
  countDislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "COUNTER",
  initialState: feedbackInitialState,
  reducers: {
    like: state => {
      state.countLike = state.countLike + 1
    },
    dislike: state => {
      state.countDislike = state.countDislike + 1
    },
    ressetResult: state => {
      state.countLike = 0,
      state.countDislike = 0
    }
  },
  selectors: {
    countLike: state => {
      return state.countLike
    },
    countDislike: state => {
      return state.countDislike
    },
  },
})

export const feedbackSliceAction = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
