
const buttonClear = document.querySelector("#button-clear");
const inputDecimal = document.querySelector("#input-decimal");
const inputBinary = document.querySelector("#input-binary");

const binaryError = document.querySelector("#binary-error");
const decimalError = document.querySelector("#decimal-error");


inputBinary.addEventListener('input', convertBinary);
// inputDecimal.addEventListener('input', convertDecimal);



function convertBinary() {
	inputDecimal.value = '';
	binaryError.style.display = 'none';
	let checkInputBinary = (inputBinary.value).replace(/[2-9\D]/gi, '');

	
	if(checkInputBinary !== inputBinary.value) {
		binaryError.style.display = 'block';
		binaryError.textContent = 'Only 0-1 accepted, max 30 symbols'; 
		inputDecimal.value = 'Error input';
	} else {
		if(inputBinary.value === '') {
			inputDecimal.value = '123';
		}
		inputDecimal.value = parseInt((inputBinary.value),2);
	}

}
// function convertDecimal() {
// 	inputBinary.value = '';

// 	inputBinary.value = (+inputDecimal.value).toString(2);
// }


buttonClear.addEventListener('click', clearInput);
function clearInput() {
	inputDecimal.value = '';
	inputBinary.value = ''; 
	binaryError.style.display = 'none';
	decimalError.style.display = 'none';
}

