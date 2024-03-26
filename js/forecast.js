const KEY = '96b947a45d33d7dc1c49af3203966408'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web

// https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
const getDate = async (cityName) => {
     let oneApi = `https://api.openweathermap.org/data/2.5/weather`
     let twoApi = `?q=${cityName}&units=metric&appid=${KEY}`
     let resolt = await fetch(oneApi + twoApi)
     let javob = await resolt.json()
     return javob
}
getDate()