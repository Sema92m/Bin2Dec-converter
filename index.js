
const buttonConvert = document.querySelector("#button-convert");
const buttonClear = document.querySelector("#button-clear");
const inputDecimal = document.querySelector("#input-decimal");
const inputBinary = document.querySelector("#input-binary");

const binaryError = document.querySelector("#binary-error");
const decimalError = document.querySelector("#decimal-error");


inputBinary.addEventListener('input', convertBinary);
inputDecimal.addEventListener('input', convertDecimal);

buttonConvert.addEventListener('click', convert);

function convert() {
	if(inputDecimal.value && inputBinary.value) {
		binaryError.style.display = 'block';
		binaryError.textContent = 'Please clear input';
	} else if(inputDecimal.value && !inputBinary.value) {
		convertDecimal();
	} else if(!inputDecimal.value && inputBinary.value) {
		convertBinary();
	}
}


function convertBinary() {
	inputDecimal.value = '';
	inputDecimal.value = parseInt((inputBinary.value),2);
}
function convertDecimal() {
	inputBinary.value = '';
	inputBinary.value = (+inputDecimal.value).toString(2);
}


buttonClear.addEventListener('click', clearInput);
function clearInput() {
	inputDecimal.value = '';
	inputBinary.value = ''; 
	binaryError.style.display = 'none';
	decimalError.style.display = 'none';
}