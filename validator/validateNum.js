var regex = /^[1-9]([0-9]{1,9})?(\.[1-9]{1,5})?$/;

function isFraction(text, output) {
	if (!regex.test(text)) {
		output.innerHTML = "Number is not correct !";
		return;
	}
	output.innerHTML = "Number is correct !";
}