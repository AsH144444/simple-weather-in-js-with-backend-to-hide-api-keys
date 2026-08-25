const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  const name = input.value;
  input.value = "";

fetch(`http://localhost:3000/weather?city=${encodeURIComponent(name)}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        return;
      }
      
    })
    .catch((error) => console.log(error));
}