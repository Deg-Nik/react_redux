import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks"
import { feedbackSliceAction, feedbackSliceSelectors } from "store/redux/feedbackSlice/feedbackSlice"; 
import { ButtonContainer, Count, FeedbackControl, FeedbackWrapper } from "./styles";

function Feedback() {
  const dispatch = useAppDispatch()
  const countLike = useAppSelector(feedbackSliceSelectors.countLike)
  const countDislike = useAppSelector(feedbackSliceSelectors.countDislike)

  const onLike = () => {
    dispatch(feedbackSliceAction.like())
  }
  const onDislike = () => {
    dispatch(feedbackSliceAction.dislike())
  }
  const ressetResults = () => {
    dispatch(feedbackSliceAction.ressetResult())
  }

  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{countLike}</Count>
        </ButtonContainer>
        <ButtonContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{countDislike}</Count>
        </ButtonContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={ressetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
