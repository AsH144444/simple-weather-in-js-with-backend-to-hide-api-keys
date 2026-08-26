const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    const name = input.value.trim();

    if (!name) {
        console.error("Please enter a city name");
        return;
    }

    input.value = "";

fetch(`http://localhost:3000/weather?city=${encodeURIComponent(name)}`)
    .then(async (response) => {

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        return data;
    })
    .then((data) => {
        console.log("Weather:", data);
        show(data)
    })
    .catch((error) => {
        console.error("Backend error:", error.message);
    });
  }

  function show(data){

    const display = document.getElementById("display")
    display.innerHTML=""
        const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class="city-name">${data.name}</div>
        <img class="condition-icon" src="sun.png" alt="book">
        <div class="temp">${Math.round(data.main.temp)}°C</div>
        <div class="condition-text">${description}</div>
        <div class="stats">
            <div class="stat">
                <img src="humidity.png" alt="Humidity">
                <span class="value">${data.main.humidity}%</span>
                <span class="label">Humidity</span>
            </div>
            <div class="stat">
                <img src="wind.png" alt="Wind">
                <span class="value">${data.wind.speed} m/s</span>
                <span class="label">Wind</span>
            </div>
        </div>
    `;
 
    display.appendChild(card);
}
 

  