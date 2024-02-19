// let  input =  document.getElementById('number');
// input.oninput = function () {
//     let result = (parseFloat(input.value) * 9) / 5 + 32;
//    output.value = parseFloat(result.toFixed(2));

//     let k = (parseFloat(input.value) + 273.15);
//     output.value = parseFloat(k.toFixed(2));
// }
// const temperatureConverter=()=>{
// const valNum = parseFloat(document.getElementById("yy").value);
// // const tempSelected = document.getAnimations("fa");
// // const valueTemp = fa.options[tempSelected.selectedIndex].value;
// const fa = document.getElementById("fa");

// // Get the selected index and value
// const selectedIndex = fa.selectedIndex;
// const valueTemp = fa.options[selectedIndex].value;


// const celToFah=(cel)=>{
//     let f=parseFloat((cel*9/5)+32);
//     return f;
// }
// const fahtocel=(fah)=>{
//     let c=parseFloat((fah-32)*5/9);
//     return c;
// }
// const celtokel=(cel)=>{
//     let k = (parseFloat(cel.value) + 273.15);
//     return k;
// }
// const fahtokel=(fah)=>{
//     let k = (parseFloat(fah.value) - 32) * 5 / 9 + 273.15;
//     return k;
// }
// const keltofah=(kel)=>{
//     let f = (parseFloat(kel.value) - 273.15) * 9 / 5 + 32;
//     return f;
// }
// const keltocel=(kel)=>{
//     let c = (parseFloat(kel.value) - 273.15);
//     return c;
// }
// // let result;
// if(valueTemp == 'cel'){
//     result=celToFah(valNum);
//     document.getElementById("result").innerHTML;
// }
// else if(valueTemp == 'cel'){
//     result=celToFah(valNum);
//     document.getElementById("result").innerHTML;
// }
// }




// function temperatureConverter() {
//     // Get input values
//     var inputValue = parseFloat(document.getElementById("yy").value);
//     var selectedUnit = document.getElementById("fa").value;
    
//     // Initialize variables for the converted value and unit
//     var convertedValue;
//     var targetUnit;
    
//     // Perform temperature conversion based on the selected unit
//     switch (selectedUnit) {
//         case "cel":
//             convertedValue = inputValue;
//             targetUnit = "Celsius";
//             break;
//         case "fah":
//             convertedValue = (inputValue - 32) * 5/9;
//             targetUnit = "Celsius";
//             break;
//         case "kel":
//             convertedValue = inputValue - 273.15;
//             targetUnit = "Celsius";
//             break;
//         default:
//             break;
//     }
    
//     // Display the converted value in the output field
//     document.getElementById("output").value = convertedValue.toFixed(2) + " " + targetUnit;
// }
// function reset(){
//     document.getElementById("yy").value=" ";
//     document.getElementById("output").value=" ";
// }



function temperatureConverter() {
    // Get the input temperature and selected conversion type
    const inputTemperature = parseFloat(document.getElementById("yy").value);
    const selectTemperature = document.getElementById("ten").value;
    // const selectToConvert = document.getElementById("ten2").value;
    // Initialize variables for the converted temperature and the result element

    const selectToConvert = document.getElementById("ten2").value;
    // const selectedIndex = selectElement.selectedIndex;
    // const selectedOption = selectElement.options[selectedIndex];
    //     const selectedValue = selectedOption.value;

    let convertedTemperature;
    const resultElement = document.getElementById("output");

    // Perform the conversion based on the selected conversion type
    switch (selectTemperature+"-"+selectToConvert) {
        case "cel-cel2":
            convertedTemperature = inputTemperature;
            break;
        case "cel-fah2":
            // Convert to Fahrenheit: °F = (°C × 9/5) + 32
            convertedTemperature = (inputTemperature * 9/5) + 32;
            break;
        case "cel-kel2":
            // Convert to Kelvin: K = °C + 273.15
            convertedTemperature = inputTemperature + 273.15;
            break;
        case "fah-fah2":
            convertedTemperature = inputTemperature;
            break;
        case "fah-cel2":
            convertedTemperature = (inputTemperature-32)/1.8;
                 break;
        case "fah-kel2":
            convertedTemperature =  (5/9 * (inputTemperature - 32)) + 273.15;
            break;
        case "kel-kel2":
            convertedTemperature = inputTemperature;
            break;
        case "kel-cel2":
            convertedTemperature = inputTemperature - 273.15;
            break;
        case "kel-fah2":
            convertedTemperature =  (9/5 * (inputTemperature - 273)) + 32;
            break;
        default:
            convertedTemperature = "Invalid";
    }

    // Display the converted temperature in the result element
    resultElement.value = convertedTemperature.toFixed(2); // Display with 2 decimal places


    
  //  console.log("Selected Index: " + selectedIndex);
    
   //     console.log("Selected Value: " + selectedValue);
}

// Function to reset the form
function reset() {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("selectConversion").value = "cel";
    document.getElementById("output").value = "";
}