function validateFraction(){
	var fraction = document.getElementById("fractions").value;
	if(fraction.match(/\b[0-9]{1,10}[.,]{1}[0-9]{1,5}\b/g)&&	!fraction.match(/^[a-zA-Z]/)) {
		document.getElementById("val").value = "Valid fraction.";
	}else{
		document.getElementById("val").value = "Invalid fraction.";
	}
}