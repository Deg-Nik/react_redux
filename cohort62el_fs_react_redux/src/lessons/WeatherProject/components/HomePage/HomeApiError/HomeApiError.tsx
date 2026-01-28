import { APIError, RedText, WhiteText } from "../styles"
import Button from "lessons/WeatherProject/input_button/Button/Button"
import { weatherSliceAction } from "store/redux/weatherSlice/weatherSlice"
import { useAppDispatch } from "store/hooks"

type Props = {
  error: string | false
}

export default function HomeApiError({ error }: Props) {
  const dispatch = useAppDispatch()

  const clearError = () => {
    dispatch(weatherSliceAction.setError(false))
    dispatch(weatherSliceAction.clearCurrentWeather())
    setTimeout(() => alert("Error cleared"), 0)
  }

  return (
    <APIError>
      <RedText>API Error:</RedText>
      <WhiteText>{error}</WhiteText>

      <Button
        name="Delete"
        variant="delete"
        isDisabled={!error}
        onClick={clearError}
      />
    </APIError>
  )
}
