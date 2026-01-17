import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceAction,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"
import Button from "components/Button/Button"
import { ButtonControl, Count, CounterWrapper } from "./styles"

function Counter() {
  // hook не принимает аргументов просто возвращает функцию которая передает действие в store
  const dispatch = useAppDispatch()
  // забираем значения из store и передаем данные в нужные места JSX, подписываемся на изменения store
  const count = useAppSelector(counterSliceSelectors.count)

  const onMinus = () => {
    // counterSliceActions.plus() - это action creator, при вызове которого мы получаем action
    dispatch(counterSliceAction.minus())
  }
  const onPlus = () => {
    const action = counterSliceAction.plus()
    dispatch(action)
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter;
