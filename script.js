const inputKm = document.getElementById("input-km");
const inputConsumption = document.getElementById("consumption");
const inputFuelPrice = document.getElementById("fuel-price");
const inputVignette = document.getElementById("vignette");
const inputPerson = document.getElementById("person");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const clearBtn = document.getElementById("clear-btn")

function calculate() {
  let km = parseFloat(inputKm.value);
  let consumption = parseFloat(inputConsumption.value);
  let fuelPrice = parseFloat(inputFuelPrice.value);
  let vignette = parseFloat(inputVignette.value);
  let person = parseFloat(inputPerson.value);
  if (!vignette) {
    vignette = 0;
  }
  if (!person) {
    person = 1;
  }
  

  let requiredFuel = (km / 100) * consumption;
  let fullFuelPrice = requiredFuel * fuelPrice;
  let fullPrice = (fullFuelPrice + vignette) / person;
  fullPrice = fullPrice.toFixed(0);
  
  result.innerHTML = `A fejenként költség az utazásra: <b>${fullPrice}</b> Ft.`;
  result.style.fontSize = "25px"
  result.style.marginLeft = "30px"
  
}

function clear() {
  result.innerHTML = "";
  inputKm.value = "";
  inputConsumption.value = "";
  inputFuelPrice.value = "";
  inputVignette.value = "";
  inputPerson.value = "";
}

btn.addEventListener('click', function() {
  calculate()
});

clearBtn.addEventListener('click', function() {
  clear();
});