//OLD CODE
// let valueToConvert;
// let chosenUnit;
// let conversionResults;

// alert(`Olá! 
// Eu sou um programa e minha função é converter qualquer valor dado por você em metros para outra unidade de medida de comprimento do sistema internacional de unidades! 
// Vamos começar?`
// );

// function receivingValue() {
//     const chosenValue = prompt("Digite o valor em metros (m) que deseja converter:");
//     valueToConvert = parseFloat(chosenValue);
//     choosingAnOption();
// };

// function choosingAnOption() {
//     chosenUnit = prompt(`Escolha uma unidade de medida (digite o número da opção):
//     1- Milímetro (mm)
//     2- Centímetro (cm)
//     3- Decímetro (dm)
//     4- Decâmetro (dam)
//     5- Hectômetro (hm)
//     6- Quilômetro (km)`
//     );
//     convertingValue();
// };

// function convertingValue() {
//     switch(chosenUnit) {
//         case "1":
//             conversionResults = valueToConvert * 10 * 10 * 10;
//             chosenUnit = "mm";
//             showResults();
//             break;

//         case "2":
//             conversionResults = valueToConvert * 10 * 10;
//             chosenUnit = "cm";
//             showResults();
//             break;

//         case "3":
//             conversionResults = valueToConvert * 10;
//             chosenUnit = "dm";
//             showResults();
//             break;

//         case "4":
//             conversionResults = valueToConvert / 10;
//             chosenUnit = "dam";
//             showResults();
//             break;

//         case "5":
//             conversionResults = valueToConvert / 10 / 10;
//             chosenUnit = "hm";
//             showResults();
//             break;

//         case "6":
//             conversionResults = valueToConvert / 10 / 10 / 10;
//             chosenUnit = "km";
//             showResults();
//             break;

//         default:
//             alert("Digite apenas o número das opções dentre 1 a 6 do menu!");
//             choosingAnOption();
//     };
// };

// function showResults() {
//     alert(`Resultados da conversão:
//     Valor a ser convertido: ${valueToConvert.toLocaleString('de-DE')} m
//     Valor convertido: ${conversionResults.toLocaleString('de-DE')} ${chosenUnit}`
//     );

//     const nextStep = confirm("Deseja realizar outra operação?");
//     if(nextStep === true) {
//         receivingValue();
//     };
// };

// receivingValue();

const metersToConvertInput = document.querySelector("#meters-to-convert");
const millimeterButton = document.querySelector("#millimeter");
const centimeterButton = document.querySelector("#centimeter");
const decimeterButton = document.querySelector("#decimeter");
const dekameterButton = document.querySelector("#dekameter");
const hectometerButton = document.querySelector("#hectometer");
const kilometerButton = document.querySelector("#kilometer");
const resultsContainer = document.querySelector(".results-container");
const spanTagWithResultsInside = document.createElement("span");

function clearInput() {
    metersToConvertInput.value = "";
};

millimeterButton.addEventListener('click', () => {
    const convertToMillimeter = metersToConvertInput.value * 10 * 10 * 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToMillimeter.toLocaleString('de-DE')} mm`;
    clearInput();
});

centimeterButton.addEventListener('click', () => {
    const convertToCentimeter = metersToConvertInput.value * 10 * 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToCentimeter.toLocaleString('de-DE')} cm`;
    clearInput();
});

decimeterButton.addEventListener('click', () => {
    const convertToDecimeter = metersToConvertInput.value * 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToDecimeter.toLocaleString('de-DE')} dm`;
    clearInput();
});

dekameterButton.addEventListener('click', () => {
    const convertToDekameter = metersToConvertInput.value / 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToDekameter.toLocaleString('de-DE')} dam`;
    clearInput();
});

hectometerButton.addEventListener('click', () => {
    const convertToHectometer = metersToConvertInput.value / 10 / 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToHectometer.toLocaleString('de-DE')} hm`;
    clearInput();
});

kilometerButton.addEventListener('click', () => {
    const convertToKilometer = metersToConvertInput.value / 10 / 10 / 10;
    resultsContainer.append(spanTagWithResultsInside);
    spanTagWithResultsInside.innerText = `${convertToKilometer.toLocaleString('de-DE')} km`;
    clearInput();
});
