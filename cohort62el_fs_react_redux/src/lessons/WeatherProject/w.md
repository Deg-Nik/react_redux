const weatherInitialState = {
error: undefined.
currentWeather: undefined,
weatherData: []
}

С сервера приходит ОДНА иконка,
а в интерфейсе нужно показать ТРИ одинаковые.

✅ Самое простое и правильное решение
В React это делается так 👇
{Array.from({ length: 3 }).map((_, index) => (
  <img key={index} src={weatherIcon} alt="weather icon" />
))}

По-человечески:

Array.from({ length: 3 }) → создаёт массив из 3 элементов

.map() → рисует 3 картинки

weatherIcon — та самая одна картинка с сервера

👉 Всегда будет ровно 3, независимо от сервера.

🟢 Альтернатива (ещё проще для мозга)
{[1, 2, 3].map((item) => (
  <img key={item} src={weatherIcon} alt="weather icon" />
))}


Работает точно так же.

❌ Чего делать не надо
<img src={weatherIcon} />
<img src={weatherIcon} />
<img src={weatherIcon} />


❌ дублирование
❌ плохо масштабируется
❌ не по-React’овски



Формат для извлечения нужных данных

JSON format API response example


                          
{
   "coord": {
      "lon": 7.367,
      "lat": 45.133
   },
   "weather": [
      {
         "id": 501,
         "main": "Rain",
         "description": "moderate rain",
         "icon": "10d"
      }
   ],
   "base": "stations",
   "main": {
      
      "feels_like": 282.93,
      "temp_min": 283.06,
      "temp_max": 286.82,
      "pressure": 1021,
      "humidity": 60,
      
   },
   "visibility": 10000,
   "wind": {
      "speed": 4.09,
      "deg": 121,
      "gust": 3.47
   },






   
   "rain": {
      "1h": 2.73
   },
   "clouds": {
      "all": 83
   },
   "dt": 1726660758,
   "sys": {
      "type": 1,
      "id": 6736,
      "country": "IT",
      "sunrise": 1726636384,
      "sunset": 1726680975
   },
   "timezone": 7200,
   "id": 3165523,
   "name": "Province of Turin",
   "cod": 200
}                    