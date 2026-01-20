import { createAppSlice } from "store/createAppSlice"
import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  countLike: 0,
  countDislike: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: {
    like: (state: FeedbackInitialState) => {
      state.countLike = state.countLike + 1
    },
    dislike: (state: FeedbackInitialState) => {
      state.countDislike = state.countDislike + 1
    },
    // ressetResult: state => {
    //   state.countLike = 0,
    //   state.countDislike = 0
    // }
    ressetResult: () => feedbackInitialState,
  },
  selectors: {
    countLike: (state: FeedbackInitialState) => {
      return state.countLike
    },
    countDislike: (state: FeedbackInitialState) => {
      return state.countDislike
    },
  },
})

export const feedbackSliceAction = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
