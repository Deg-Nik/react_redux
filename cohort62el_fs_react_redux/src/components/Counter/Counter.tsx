import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceAction,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"
import Button from "components/Button/Button"
import { ButtonControl, Count, CounterWrapper } from "./styles"
import { log } from "console"

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
    console.log(action);
    dispatch(action)
  }

  const onDivide = () => {
    dispatch(counterSliceAction.divide(5))
  }

  const onMultiply = () => {
    dispatch(counterSliceAction.multiply(3))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter;
