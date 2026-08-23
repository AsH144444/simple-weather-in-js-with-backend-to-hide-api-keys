const apiKey = import.meta.env.VITE_API_KEY;

const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  const name = input.value;

  console.log(name);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      console.log("Temperature:", data.main.temp);
      console.log("Weather:", data.weather[0].description);
    })
    .catch((error) => {
      console.log(error);
    });
}