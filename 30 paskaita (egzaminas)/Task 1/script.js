/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form");
form.style.color = "grey";
form.style.justifyContent = "center";

function convertWeight(e) {
  e.preventDefault();
  const kilogram = document.querySelector("#search").value;
  console.log(kilogram);
  let svarus = Number(kilogram) * 2.2046;
  let gramus = Number(kilogram) / 0.001;
  let uncijos = Number(kilogram) * 35.274;
  form.innerHTML =
    "Svarai" +
    " " +
    svarus +
    " " +
    "Gramai" +
    " " +
    gramus +
    " " +
    "Uncijos" +
    " " +
    uncijos;
}

form.addEventListener("submit", convertWeight);
