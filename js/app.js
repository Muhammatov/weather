const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

async function showUi(data) {
     card.innerHTML = `

     <div class="icon-container">
          <img
            id="weather-icon"
            class="icon"
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt=""
            width="100"
            height="100"
          />
        </div>

        <div id="details" class="text-uppercase">
          <h5 class="mb-3">${data.name},${data.sys.country}</h5>
          <p class="mb-3">${data.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(data.main.temp)}</span>
            <span>&deg;C</span>
          </div>
        </div>
     `
}

const showDate = async (name) => {
     let names = await getDate(name)
     console.log(names);
     showUi(names)
}
changeLocation.addEventListener('submit', (e) => {
     let a = changeLocation.city.value.trim();
     changeLocation.city.value = ''
     showDate(a)
     e.preventDefault()
})


