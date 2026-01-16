import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceAction,
  counterSliceSelectors,
} from "store/redux/counterSlice/counterSlice"
import Button from "components/Button/Button"

import "./styles.css"

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
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  )
}

export default Counter
